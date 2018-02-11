const { technology } = require('../loaders')

exports.technology = ({id}) => technology.load(id)
