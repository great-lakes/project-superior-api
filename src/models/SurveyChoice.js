const Model = require('../../bootstrap/dbModel')

class SurveyChoice extends Model {
  static get tableName () {
    return 'surveychoices'
  }

  survey_question (args, context) { // eslint-disable-line camelcase
    return this.$relatedQuery('survey_question')
  }

  survey_answers (args, context) { // eslint-disable-line camelcase
    return this.$relatedQuery('survey_answers')
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const SurveyQuestion = require('./SurveyQuestion')
    const SurveyAnswer = require('./SurveyAnswer')

    return {
      survey_question: {
        relation: Model.BelongsToOneRelation,
        modelClass: SurveyQuestion,
        join: {
          from: 'surveychoices.surveyquestion_id',
          to: 'surveyquestions.id'
        }
      },
      survey_answers: {
        relation: Model.HasManyRelation,
        modelClass: SurveyAnswer,
        join: {
          from: 'surveychoices.id',
          to: 'surveyanswers.surveychoice_id'
        }
      }
    }
  }
}

module.exports = SurveyChoice
