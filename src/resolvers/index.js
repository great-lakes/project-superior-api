const { project, newStudentProject } = require('./project')
const { hackathon, hackathons } = require('./hackathon')
const { student, createStudent } = require('./student')
const { setInquiryStatus, setInquiryNotes, setInquiryMentor } = require('./inquiry')
const { azurecode, issueAzurecodeById, issueUnclaimedAzurecode } = require('./azurecode')
const { mentor } = require('./mentor')
const { skill } = require('./skill')
const { technology } = require('./technology')

module.exports = {
  hackathons,
  hackathon,
  project,
  azurecode,
  student,
  mentor,
  skill,
  technology,
  setInquiryStatus,
  setInquiryNotes,
  setInquiryMentor,
  issueAzurecodeById,
  issueUnclaimedAzurecode,
  createStudent,
  newStudentProject
}
