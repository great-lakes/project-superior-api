const Skill = require('../models/Skill')

exports.skill = ({id}, context) => Skill.query().findById(id)
