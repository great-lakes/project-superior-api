const Model = require('../../bootstrap/dbModel')

class SurveyAnswer extends Model {
  static get tableName () {
    return 'surveyanswers'
  }

  survey_question (args, context) { // eslint-disable-line camelcase
    return this.$relatedQuery('survey_question')
  }

  survey_choice (args, context) { // eslint-disable-line camelcase
    return this.$relatedQuery('survey_choice')
  }

  survey_submission (args, context) { // eslint-disable-line camelcase
    return this.$relatedQuery('survey_submission')
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const SurveyQuestion = require('./SurveyQuestion')
    const SurveyChoice = require('./SurveyChoice')
    const SurveySubmission = require('./SurveySubmission')

    return {
      survey_question: {
        relation: Model.BelongsToOneRelation,
        modelClass: SurveyQuestion,
        join: {
          from: 'surveyanswers.surveyquestion_id',
          to: 'surveyquestions.id'
        }
      },
      survey_choice: {
        relation: Model.BelongsToOneRelation,
        modelClass: SurveyChoice,
        join: {
          from: 'surveyanswers.surveychoice_id',
          to: 'surveychoices.id'
        }
      },
      survey_submission: {
        relation: Model.BelongsToOneRelation,
        modelClass: SurveySubmission,
        join: {
          from: 'surveyanswers.surveysubmission_id',
          to: 'surveysubmissions.id'
        }
      }
    }
  }
}

module.exports = SurveyAnswer
