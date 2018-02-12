const Model = require('../../bootstrap/dbModel')
const _ = require('lodash')

class Hackathon extends Model {
  static get tableName () {
    return 'hackathons'
  }

  // projects () {
  //   const { project } = require('../loaders')
  //   return this.$relatedQuery('projects').then((projects) => {
  //     return project.loadMany(projects.map((project) => project.id))
  //   })
  // }

  // azurecodes () {
  //   const { azurecodes } = require('../loaders')
  //   return azurecodes.loadMany()
  // }

  inquiries () {
    return this.$relatedQuery('projects').then((projects) => {
      return Promise.all(projects.map((project) => project.$relatedQuery('students')))
    })
    .then((studentsNested) => {
      const students = _.flattenDeep(studentsNested)
      return Promise.all(students.map((student) => student.$relatedQuery('inquiries')))
    })
    .then((inquiriesNested) => {
      const inquiries = _.flattenDeep(inquiriesNested)
      const {inquiry: inquiryLoader} = require('../loaders')
      return inquiryLoader.loadMany(inquiries.map(inquiry => inquiry.id))
    })
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Azurecode = require('./Azurecode')
    const Project = require('./Project')
    const Mentor = require('./Mentor')

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
      }
    }
  }
}

module.exports = Hackathon
