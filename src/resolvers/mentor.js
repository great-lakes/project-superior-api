const { mentor } = require('../loaders')

exports.mentor = ({id}) => mentor.load(id)
