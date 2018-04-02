const Technology = require('../models/Technology')

exports.technology = ({id}, context) => Technology.query().findById(id)
