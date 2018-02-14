const Inquiry = require('../models/Inquiry')
const Student = require('../models/Student')
const Project = require('../models/Project')

exports.inquiry = ({id}, {loaders}) => loaders.inquiry.load(id)

exports.setInquiryStatus = ({id, status}, {loaders}) => {
  return Inquiry
    .query()
    .patchAndFetchById(id, {is_resolved: status === 'RESOLVED'})
    .then((updatedInquiry) => {
      return loaders.inquiry.load(updatedInquiry.id)
    })
}

exports.setInquiryNotes = ({id, notes}, {loaders}) => {
  if (typeof notes === 'undefined') {
    return {error: 'notes is undefined'}
  }

  return Inquiry
    .query()
    .patchAndFetchById(id, {mentor_notes: notes})
    .then((updatedInquiry) => {
      return loaders.inquiry.load(updatedInquiry.id)
    })
}

exports.setInquiryMentor = ({inquiryId, mentorId}, {loaders}) => {
  return Inquiry
    .query()
    .patchAndFetchById(inquiryId, {mentor_id: mentorId})
    .then((updatedInquiry) => loaders.inquiry.load(updatedInquiry.id))
}

exports.newInquiry = ({hackathonId, studentName, studentEmail, question}, {loaders}) => {
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
    return loaders.inquiry.load(created.id)
  })
}
