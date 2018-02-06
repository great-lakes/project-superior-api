const Model = require('../../bootstrap/dbModel')

class Hackathon extends Model {
  static get tableName () {
    return 'hackathons'
  }

  projects () {
    const { project } = require('../loaders')
    return this.$relatedQuery('projects').then((projects) => {
      return project.loadMany(projects.map((project) => project.id))
    })
  }

  azurecodes () {
    const { azurecodes } = require('../loaders')
    return azurecodes.loadMany()
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Azurecode = require('./Azurecode')
    const Project = require('./Project')

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
      }
    }
  }
}

module.exports = Hackathon
