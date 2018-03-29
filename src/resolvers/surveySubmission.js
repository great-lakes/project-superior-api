const SurveySubmission = require('../models/SurveySubmission')

exports.surveySubmission = ({id}, context) => SurveySubmission.query().findById(id)
