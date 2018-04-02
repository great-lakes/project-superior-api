const SurveyChoice = require('../models/SurveyChoice')

exports.surveyChoice = ({id}, context) => SurveyChoice.query().findById(id)
