const Model = require('../../bootstrap/dbModel')

class Survey extends Model {
  static get tableName () {
    return 'surveys'
  }

  survey_questions (args, {loaders}) {
    return this.$relatedQuery('survey_questions').then((survey_questions) => {
      return loaders.surveyQuestion.loadMany(survey_questions.map(questionObj => questionObj.id))
    })
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Hackathon = require('./Hackathon')
    const SurveyQuestion = require('./SurveyQuestion')
    const SurveySubmission = require('./SurveySubmission')

    return {
      hackathons: {
        relation: Model.ManyToManyRelation,
        modelClass: Hackathon,
        join: {
          from: 'surveys.id',
          through: {
            from: 'hackathons_surveys.survey_id',
            to: 'hackathons_surveys.hackathon_id'
          },
          to: 'hackathons.id'
        }
      },
      survey_questions: {
        relation: Model.HasManyRelation,
        modelClass: SurveyQuestion,
        join: {
          from: 'surveys.id',
          to: 'surveyquestions.survey_id'
        }
      },
      survey_submissions: {
        relation: Model.HasManyRelation,
        modelClass: SurveySubmission,
        join: {
          from: 'surveys.id',
          to: 'surveysubmissions.survey_id'
        }
      }
    }
  }
}

module.exports = Survey
