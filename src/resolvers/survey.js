const Survey = require('../models/Survey')

exports.survey = ({id}, context) => Survey.query().findById(id)
