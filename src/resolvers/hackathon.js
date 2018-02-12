const { hackathon } = require('../loaders')
const Hackathon = require('../models/Hackathon')

exports.hackathon = (args) => {
  return hackathon.load(args.id)
}

exports.hackathons = () => {
  return Hackathon.query()
      .then((hackathons) => {
        return hackathon.loadMany(hackathons.map(hackathon => hackathon.id))
      })
}
