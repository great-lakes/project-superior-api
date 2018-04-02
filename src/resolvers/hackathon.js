const Hackathon = require('../models/Hackathon')

exports.hackathon = ({id}, context) => {
  return Hackathon.query().findById(id)
}

exports.hackathons = (args, context) => {
  return Hackathon.query()
}
