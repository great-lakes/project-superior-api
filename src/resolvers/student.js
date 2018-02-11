const { student } = require('../loaders')
const Student = require('../models/Student')

exports.student = (args = {}, context, info) => {
  return student.load(args.id)
}

exports.createStudent = ({name, email, phone}) => {
  return Student.query()
    .insert({name, email, phone})
    .then((created) => {
      return student.load(created.id)
    })
}
