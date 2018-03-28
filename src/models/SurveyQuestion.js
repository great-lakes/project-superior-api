const Model = require('../../bootstrap/dbModel')

class SurveyQuestion extends Model {
  static get tableName () {
    return 'surveyquestions'
  }
  static get relationMappings () {
    // Import models here to prevent require loops.
    const Survey = require('./Survey')
    const SurveyChoice = require('./SurveyChoice')
    const SurveyAnswer = require('./SurveyAnswer')

    return {
      survey: {
        relation: Model.BelongsToOneRelation,
        modelClass: Survey,
        join: {
          from: 'surveyquestions.survey_id',
          to: 'surveys.id'
        }
      },
      survey_choices: {
        relation: Model.HasManyRelation,
        modelClass: SurveyChoice,
        join: {
          from: 'surveyquestions.id',
          to: 'surveychoices.surveyquestion_id'
        }
      },
      survey_answers: {
        relation: Model.HasManyRelation,
        modelClass: SurveyAnswer,
        join: {
          from: 'surveyquestions.id',
          to: 'surveyanswers.surveyquestion_id'
        }
      }
    }
  }
}

module.exports = SurveyQuestion
