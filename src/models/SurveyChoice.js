const Model = require('../../bootstrap/dbModel')

class SurveyChoice extends Model {
  static get tableName () {
    return 'surveychoices'
  }

  survey_answers (args, {loaders}) {
    return this.$relatedQuery('survey_answers').then((survey_answers) => {
      return loaders.surveyAnswer.loadMany(survey_answers.map(answerObj => answerObj.id))
    })
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
