const { inquiry } = require('../loaders')

const Inquiry = require('../models/Inquiry')

exports.inquiry = ({id}) => inquiry.load(id)

exports.setInquiryStatus = ({id, status}) => {
  return Inquiry
    .query()
    .patchAndFetchById(id, {is_resolved: status === 'RESOLVED'})
    .then((updatedInquiry) => {
      return inquiry.load(updatedInquiry.id)
    })
}

exports.setInquiryNotes = ({id, notes}) => {
  if (typeof notes === 'undefined') {
    return {error: 'notes is undefined'}
  }

  return Inquiry
    .query()
    .patchAndFetchById(id, {mentor_notes: notes})
    .then((updatedInquiry) => {
      return inquiry.load(updatedInquiry.id)
    })
}

exports.setInquiryMentor = ({inquiryId, mentorId}) => {
  return Inquiry
    .query()
    .patchAndFetchById(inquiryId, {mentor_id: mentorId})
    .then((updatedInquiry) => inquiry.load(updatedInquiry.id))
}
