const SurveyQuestion = require('../models/SurveyQuestion')

exports.surveyQuestion = ({id}, context) => SurveyQuestion.query().findById(id)
