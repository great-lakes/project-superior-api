const { project, newStudentProject } = require('./project')
const { hackathon, hackathons } = require('./hackathon')
const { student, createStudent } = require('./student')
const { setInquiryStatus, setInquiryNotes, setInquiryMentor } = require('./inquiry')
const { takeAzurecodeById, takeOneAzurecode } = require('./azurecode')
const { mentor } = require('./mentor')
const { skill } = require('./skill')
const { technology } = require('./technology')

module.exports = {
  hackathons,
  project,
  hackathon,
  student,
  mentor,
  skill,
  technology,
  setInquiryStatus,
  setInquiryNotes,
  setInquiryMentor,
  takeAzurecodeById,
  takeOneAzurecode,
  createStudent,
  newStudentProject
}
