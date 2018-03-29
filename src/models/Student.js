const Model = require('../../bootstrap/dbModel')

class Student extends Model {
  static get tableName () {
    return 'students'
  }

  inquiries (args, context) {
    return this.$relatedQuery('inquiries')
  }

  project (args, context) {
    return this.$relatedQuery('project')
  }

  azurecode (args, context) {
    return this.$relatedQuery('azurecode')
  }

  survey_submissions (args, context) { // eslint-disable-line camelcase
    return this.$relatedQuery('survey_submissions')
  }

  static findWithEmail (hackathonId, email) {
    console.log(hackathonId, email)
    return Student.query()
      .eager('project')
      .where({email})
      .then((students) => students.find((student) => student.project.hackathon_id === +hackathonId))
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Inquiry = require('./Inquiry')
    const Project = require('./Project')
    const Azurecode = require('./Azurecode')
    // const Hackathon = require('./Hackathon')
    const SurveySubmission = require('./SurveySubmission')

    return {
      inquiries: {
        relation: Model.HasManyRelation,
        modelClass: Inquiry,
        join: {
          from: 'students.id',
          to: 'inquiries.student_id'
        }
      },
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: 'students.project_id',
          to: 'projects.id'
        }
      },
      azurecode: {
        relation: Model.HasOneRelation,
        modelClass: Azurecode,
        join: {
          from: 'students.id',
          to: 'azurecodes.student_id'
        }
      },
      survey_submissions: {
        relation: Model.HasManyRelation,
        modelClass: SurveySubmission,
        join: {
          from: 'students.id',
          to: 'surveysubmissions.student_id'
        }
      }
    }
  }
}

module.exports = Student
