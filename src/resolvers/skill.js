const { skill } = require('../loaders')

exports.skill = ({id}) => skill.load(id)
