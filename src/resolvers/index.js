const { project, newStudentProject } = require('./project')
const { hackathon, hackathons } = require('./hackathon')
const { student, createStudent } = require('./student')
const { setInquiryStatus, setInquiryNotes, setInquiryMentor, newInquiry } = require('./inquiry')
const { azurecode, issueAzurecodeById, issueUnclaimedAzurecode } = require('./azurecode')
const { mentor } = require('./mentor')
const { skill } = require('./skill')
const { technology } = require('./technology')
const { session } = require('./session')

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
  newStudentProject
}
