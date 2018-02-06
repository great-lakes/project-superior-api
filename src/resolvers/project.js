// const Project = require('../../models/Project')
const { project } = require('../loaders')

module.exports = (args = {}, context, info) => {
  return project.load(args.id)
}
