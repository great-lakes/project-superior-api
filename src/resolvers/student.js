const { student } = require('../loaders')

module.exports = (args = {}, context, info) => {
  return student.load(args.id)
}
