const Model = require('../../bootstrap/dbModel')
const _ = require('lodash')

class Hackathon extends Model {
  static get tableName () {
    return 'hackathons'
  }

  mentors (args, {loaders}) {
    return this.$relatedQuery('mentors').then((mentors) => {
      return loaders.mentor.loadMany(mentors.map(mentorObj => mentorObj.id))
    })
  }

  sessions (args, {loaders}) {
    return this.$relatedQuery('sessions').then((mentors) => {
      return loaders.sessions.loadMany(mentors.map(mentorObj => mentorObj.id))
    })
  }

  technologies (args, {loaders}) {
    return this.$relatedQuery('technologies').then((technologies) => {
      return loaders.technologies.loadMany(technologies.map(_ => _.id))
    })
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
      }
    }
  }
}

module.exports = Hackathon
