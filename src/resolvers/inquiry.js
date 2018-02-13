const Inquiry = require('../models/Inquiry')

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
