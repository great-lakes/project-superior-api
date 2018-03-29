const SurveySubmission = require('../models/SurveySubmission')
const SurveyAnswer = require('../models/SurveyAnswer')
const Student = require('../models/Student')
const Project = require('../models/Project')

exports.surveySubmission = ({id}, context) => SurveySubmission.query().findById(id)

exports.randomSurveySubmission = ({hackathonId, surveyId}) => {
  return SurveySubmission.query()
    .where({hackathon_id: hackathonId, survey_id: surveyId})
    .then((submissions) => {
      return submissions.map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])[1]
    })
}

exports.createSurveySubmission = ({surveyResult}) => {
  const {hackathonId, surveyId, studentName, studentEmail, data} = surveyResult
  let studentId

  const ensureStudent = student => {
    // console.log('student', student)
    if (student) {
      // console.log('foundStudent')
      return student
    }
    return Project.query()
      .insert({
        name: 'No Project Info',
        hackathon_id: hackathonId
      })
      .then((createdProject) => {
        return Student.query()
          .insert({
            name: studentName,
            email: studentEmail,
            project_id: createdProject.id
          })
      })
  }

  const lookupSubmission = student => {
    studentId = student.id
    return SurveySubmission.query().where({
      student_id: student.id,
      survey_id: surveyId
    })
  }

  return Student
    .findWithEmail(hackathonId, studentEmail)
    .then(ensureStudent)
    .then(lookupSubmission)
    .then((submissions) => {
      // console.log('submission', submissions)
      if (submissions.length > 0) {
        return {
          result: 'DUPLICATE'
        }
      }
      return SurveySubmission.query().insert({
        hackathon_id: hackathonId,
        survey_id: surveyId,
        student_id: studentId
      }).then((surveySubmission) => {
        return SurveyAnswer.query().insert(data.map((datum) => {
          return {
            surveyquestion_id: datum.surveyQuestionId,
            surveychoice_id: datum.surveyChoiceId,
            surveysubmission_id: surveySubmission.id,
            value: datum.value
          }
        }))
      }).then((createdAnswers) => {
        return {
          result: 'CREATED'
        }
      })
    })
}
