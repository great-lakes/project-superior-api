const Model = require('../../bootstrap/dbModel')
const relatedModelLoader = require('../loaders/relatedModelLoader')
const _ = require('lodash')

class Hackathon extends Model {
  static get tableName () {
    return 'hackathons'
  }

  surveys (args, {loaders}) {
    return relatedModelLoader(this, loaders, 'surveys', 'survey')
  }

  mentors (args, {loaders}) {
    return relatedModelLoader(this, loaders, 'mentors', 'mentor')
  }

  sessions (args, {loaders}) {
    return relatedModelLoader(this, loaders, 'sessions', 'session')
  }

  technologies (args, {loaders}) {
    return relatedModelLoader(this, loaders, 'technologies', 'technology')
  }

  students (args, {loaders}) {
    return this.$relatedQuery('projects').then((projects) => {
      return Promise.all(projects.map((project) => project.$relatedQuery('students')))
    })
    .then((studentsNested) => {
      const students = _.flattenDeep(studentsNested)
      return loaders.student.loadMany(students.map((student) => student.id))
    })
  }

  findStudent ({email}, {loaders}, info) {
    const Student = require('../models/Student')
    return Student.findWithEmail(this.id, email)
  }

  inquiries (args, {loaders}, info) {
    return this.$relatedQuery('projects').then((projects) => {
      return Promise.all(projects.map((project) => project.$relatedQuery('students')))
    })
    .then((studentsNested) => {
      const students = _.flattenDeep(studentsNested)
      return Promise.all(students.map((student) => student.$relatedQuery('inquiries')))
    })
    .then((inquiriesNested) => {
      const inquiries = _.flattenDeep(inquiriesNested)
      return loaders.inquiry.loadMany(inquiries.map(inquiry => inquiry.id))
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
