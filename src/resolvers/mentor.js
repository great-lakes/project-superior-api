const Mentor = require('../models/Mentor')

exports.mentor = ({id}, context) => Mentor.query().findById.load(id)
