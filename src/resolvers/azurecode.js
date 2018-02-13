const Azurecode = require('../models/Azurecode')
const Student = require('../models/Student')
const Project = require('../models/Project')

exports.azurecode = ({id}, {loaders}) => loaders.azurecode.load(id)

exports.issueAzurecodeById = ({id}, {loaders}) => {
  return Azurecode
    .query()
    .patchAndFetchById(id, {is_taken: true})
    .then((updated) => {
      return loaders.azurecode.load(updated.id)
    })
}

exports.issueUnclaimedAzurecode = ({hackathonId, studentName, studentEmail, projectName, projectDescription, projectTechText}, {loaders}) => {
  return Student
    .findWithEmail(hackathonId, studentEmail)
    .then(student => {
      if (student) {
        return student.$loadRelated('azurecode')
      }
      return Project.query()
        .insert({
          name: projectName,
          description: projectDescription,
          tech_name: projectTechText,
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
        .then(createdStudent => {
          return createdStudent.$loadRelated('azurecode')
        })
    })
    .then((student) => {
      const {azurecode} = student
      if (azurecode) return azurecode

      return Azurecode
          .query()
          .findOne({is_taken: false, hackathon_id: hackathonId})
          .then(azurecodeModel => {
            if (!azurecodeModel) {
              return null
            }
            return Azurecode.query().patchAndFetchById(azurecodeModel.id, {is_taken: true, student_id: student.id})
          })
    })
    .then(updated => {
      if (!updated) return null
      return loaders.azurecode.load(updated.id)
    })
}
