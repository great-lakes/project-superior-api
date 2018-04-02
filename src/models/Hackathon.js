const Model = require('../../bootstrap/dbModel')
const _ = require('lodash')

class Hackathon extends Model {
  static get tableName () {
    return 'hackathons'
  }

  surveys (args, context) {
    return this.$relatedQuery('surveys')
  }

  mentors (args, context) {
    return this.$relatedQuery('mentors')
  }

  sessions (args, context) {
    return this.$relatedQuery('sessions')
  }

  technologies (args, context) {
    return this.$relatedQuery('technologies')
  }

  students (args, context) {
    return this.$relatedQuery('projects').then((projects) => {
      return Promise.all(projects.map((project) => project.$relatedQuery('students')))
    })
    .then((studentsNested) => {
      return _.flattenDeep(studentsNested)
    })
  }

  findStudent ({email}, context, info) {
    const Student = require('../models/Student')
    return Student.findWithEmail(this.id, email)
  }

  inquiries (args, context, info) {
    return this.$relatedQuery('projects').then((projects) => {
      return Promise.all(projects.map((project) => project.$relatedQuery('students')))
    })
    .then((studentsNested) => {
      const students = _.flattenDeep(studentsNested)
      return Promise.all(students.map((student) => student.$relatedQuery('inquiries')))
    })
    .then((inquiriesNested) => {
      return _.flattenDeep(inquiriesNested)
    })
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Azurecode = require('./Azurecode')
    const Project = require('./Project')
    const Mentor = require('./Mentor')
    const Session = require('./Session')
    const Technology = require('./Technology')
    const Survey = require('./Survey')
    const SurveySubmission = require('./SurveySubmission')

    return {
      azurecodes: {
        relation: Model.HasManyRelation,
        modelClass: Azurecode,
        join: {
          from: 'hackathons.id',
          to: 'azurecodes.hackathon_id'
        }
      },
      projects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: 'hackathons.id',
          to: 'projects.hackathon_id'
        }
      },
      sessions: {
        relation: Model.HasManyRelation,
        modelClass: Session,
        join: {
          from: 'hackathons.id',
          to: 'sessions.hackathon_id'
        }
      },
      mentors: {
        relation: Model.ManyToManyRelation,
        modelClass: Mentor,
        join: {
          from: 'hackathons.id',
          through: {
            from: 'hackathons_mentors.hackathon_id',
            to: 'hackathons_mentors.mentor_id'
          },
          to: 'mentors.id'
        }
      },
      technologies: {
        relation: Model.ManyToManyRelation,
        modelClass: Technology,
        join: {
          from: 'hackathons.id',
          through: {
            from: 'hackathons_technologies.hackathon_id',
            to: 'hackathons_technologies.technology_id'
          },
          to: 'technologies.id'
        }
      },
      surveys: {
        relation: Model.ManyToManyRelation,
        modelClass: Survey,
        join: {
          from: 'hackathons.id',
          through: {
            from: 'hackathons_surveys.hackathon_id',
            to: 'hackathons_surveys.survey_id'
          },
          to: 'surveys.id'
        }
      },
      survey_submissions: {
        relation: Model.HasManyRelation,
        modelClass: SurveySubmission,
        join: {
          from: 'hackathons.id',
          to: 'surveysubmissions.hackathon_id'
        }
      }
    }
  }
}

module.exports = Hackathon
