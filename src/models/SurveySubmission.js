const Model = require('../../bootstrap/dbModel')

class SurveySubmission extends Model {
  static get tableName () {
    return 'surveysubmissions'
  }
  static get relationMappings () {
    // Import models here to prevent require loops.
    const Hackathon = require('./Hackathon')
    const Survey = require('./Survey')
    const Student = require('./Student')
    const SurveyAnswer = require('./SurveyAnswer')

    return {
      hackathon: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hackathon,
        join: {
          from: 'surveysubmissions.hackathon_id',
          to: 'hackathons.id'
        }
      },
      survey: {
        relation: Model.BelongsToOneRelation,
        modelClass: Survey,
        join: {
          from: 'surveysubmissions.survey_id',
          to: 'surveys.id'
        }
      },
      student: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'surveysubmissions.student_id',
          to: 'students.id'
        }
      },
      survey_answers: {
        relation: Model.HasManyRelation,
        modelClass: SurveyAnswer,
        join: {
          from: 'surveysubmissions.id',
          to: 'surveyanswers.surveysubmission_id'
        }
      }
    }
  }
}

module.exports = SurveySubmission
