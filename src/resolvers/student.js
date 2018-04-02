const Student = require('../models/Student')

exports.student = ({id}, context) => Student.query().findById(id)

exports.createStudent = ({name, email, phone}, context) => {
  return Student.query()
    .insert({name, email, phone})
}
