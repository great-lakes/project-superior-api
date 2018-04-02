const Session = require('../models/Session')

exports.session = ({id}, context) => Session.query().findById(id)
