const Hackathon = require('../models/Hackathon')

exports.hackathon = ({id}, {loaders}) => {
  return loaders.hackathon.load(id)
}

exports.hackathons = (args, {loaders}) => {
  return Hackathon.query()
      .then((hackathons) => {
        return loaders.hackathon.loadMany(hackathons.map(hackathon => hackathon.id))
      })
}
