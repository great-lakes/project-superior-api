const { hackathon } = require('../loaders')

module.exports = (args) => {
  return hackathon.load(args.id)
}
