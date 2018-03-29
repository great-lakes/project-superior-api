const Project = require('../models/Project')
const Student = require('../models/Student')

exports.project = (args = {}, context, info) => {
  return Project.query().findById(args.id)
}

exports.createProject = ({name, description}, context) => {
  return Project.query()
    .insert({name: name, description: description})
}

exports.newStudentProject = ({hackathonId, projectName, projectDescription, studentName, studentEmail, studentPhone}, context) => {
  let newProject
  return Project.query()
    .insert({hackathon_id: hackathonId, name: projectName, description: projectDescription})
    .then(createdProject => {
      newProject = createdProject
      return Student.query()
        .insert({project_id: createdProject.id, name: studentName, email: studentEmail, phone: studentPhone})
    })
    .then(createdStudent => {
      return newProject
    })
}
