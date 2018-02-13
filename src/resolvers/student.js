const Student = require('../models/Student')

exports.student = (args = {}, {loaders}, info) => {
  return loaders.student.load(args.id)
}

exports.createStudent = ({name, email, phone}, {loaders}) => {
  return Student.query()
    .insert({name, email, phone})
    .then((created) => {
      return loaders.student.load(created.id)
    })
}
