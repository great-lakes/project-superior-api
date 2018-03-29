const Inquiry = require('../models/Inquiry')
const Student = require('../models/Student')
const Project = require('../models/Project')
const Mentor = require('../models/Mentor')
const sendMentorAssignedEmail = require('../support/emails/sendMentorAssignedEmail')

exports.inquiry = ({id}, context) => Inquiry.query().findById(id)

exports.setInquiryStatus = ({id, status}, context) => {
  return Inquiry
    .query()
    .patchAndFetchById(id, {is_resolved: status === 'RESOLVED'})
    .then((updatedInquiry) => {
      return Inquiry.query().findById(updatedInquiry.id)
    })
}

exports.setInquiryNotes = ({id, notes}, context) => {
  if (typeof notes === 'undefined') {
    return {error: 'notes is undefined'}
  }

  return Inquiry
    .query()
    .patchAndFetchById(id, {mentor_notes: notes})
    .then((updatedInquiry) => {
      return Inquiry.query().findById(updatedInquiry.id)
    })
}

const sendEmailIfMentorWasNull = ([inquiry, mentor]) => {
  if (!inquiry.mentor_id) {
    const studentEmail = inquiry.student.email
    const aliasEmail = process.env.ALIAS_EMAIL
    const mentorEmail = mentor.email
    return sendMentorAssignedEmail(studentEmail, aliasEmail, mentorEmail)
  }
}

exports.setInquiryMentor = ({inquiryId, mentorId}, context) => {
  const getInquiry = Inquiry.query().eager('student').findById(inquiryId)
  const getMentor = Mentor.query().findById(mentorId)
  return Promise.all([getInquiry, getMentor])
    .then((results) => {
      sendEmailIfMentorWasNull(results) // sending the email out to the void :(
        .catch((error) => {             // makes the response faster
          console.log(error)
        })

      return Inquiry
        .query()
        .patchAndFetchById(inquiryId, {mentor_id: mentorId})
    })
    .then((updatedInquiry) => Inquiry.query().findById(updatedInquiry.id))
}

exports.newInquiry = ({hackathonId, studentName, studentEmail, question}, context) => {
  return Student
  .findWithEmail(hackathonId, studentEmail)
  .then(student => {
    if (student) {
      return student.$loadRelated('azurecode')
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
  })
  .then((student) => {
    return Inquiry
        .query()
        .insert({
          question,
          student_id: student.id
        })
  })
  .then(created => {
    return Inquiry.query().findById(created.id)
  })
}
