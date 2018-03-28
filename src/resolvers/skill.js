exports.skill = ({id}, {loaders}) => require('../models/Skill').query().findById(id)
