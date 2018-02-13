const Project = require('../models/Project')
const Student = require('../models/Student')

exports.project = (args = {}, {loaders}, info) => {
  return loaders.project.load(args.id)
}

exports.createProject = ({name, description}, {loaders}) => {
  return Project.query()
    .insert({name, description})
    .then((created) => {
      return loaders.project.load(created.id)
    })
}

exports.newStudentProject = ({hackathonId, projectName, projectDescription, studentName, studentEmail, studentPhone}, {loaders}) => {
  let newProject
  return Project.query()
    .insert({hackathon_id: hackathonId, name: projectName, description: projectDescription})
    .then(createdProject => {
      newProject = createdProject
      return Student.query()
        .insert({project_id: createdProject.id, name: studentName, email: studentEmail, phone: studentPhone})
    })
    .then(createdStudent => {
      return loaders.project.load(newProject.id)
    })
}
