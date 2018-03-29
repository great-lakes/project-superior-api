const SurveyAnswer = require('../models/SurveyAnswer')

exports.surveyAnswer = ({id}, context) => SurveyAnswer.query().findById(id)
