// const Project = require('../../models/Project')
const { project } = require('../loaders')
const Project = require('../models/Project')
const Student = require('../models/Student')

exports.project = (args = {}, context, info) => {
  return project.load(args.id)
}

exports.createProject = ({name, description}) => {
  return Project.query()
    .insert({name, description})
    .then((created) => {
      return project.load(created.id)
    })
}

exports.newStudentProject = ({hackathonId, projectName, projectDescription, studentName, studentEmail, studentPhone}) => {
  let newProject
  return Project.query()
    .insert({hackathon_id: hackathonId, name: projectName, description: projectDescription})
    .then(createdProject => {
      newProject = createdProject
      return Student.query()
        .insert({project_id: createdProject.id, name: studentName, email: studentEmail, phone: studentPhone})
    })
    .then(createdStudent => {
      return project.load(newProject.id)
    })
}
