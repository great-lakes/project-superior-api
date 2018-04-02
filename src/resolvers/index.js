const { project, newStudentProject } = require('./project')
const { hackathon, hackathons } = require('./hackathon')
const { student, createStudent } = require('./student')
const { setInquiryStatus, setInquiryNotes, setInquiryMentor, newInquiry } = require('./inquiry')
const { azurecode, issueAzurecodeById, issueUnclaimedAzurecode } = require('./azurecode')
const { mentor } = require('./mentor')
const { skill } = require('./skill')
const { technology } = require('./technology')
const { session } = require('./session')
const { survey } = require('./survey')
const { surveyQuestion } = require('./surveyQuestion')
const { surveyChoice } = require('./surveyChoice')
const { surveyAnswer } = require('./surveyAnswer')
const { surveySubmission, randomSurveySubmission, createSurveySubmission } = require('./surveySubmission')

module.exports = {
  hackathons,
  hackathon,
  project,
  azurecode,
  student,
  mentor,
  skill,
  technology,
  session,
  setInquiryStatus,
  setInquiryNotes,
  setInquiryMentor,
  newInquiry,
  issueAzurecodeById,
  issueUnclaimedAzurecode,
  createStudent,
  newStudentProject,
  survey,
  surveyQuestion,
  surveyChoice,
  surveyAnswer,
  surveySubmission,
  randomSurveySubmission,
  createSurveySubmission
}
