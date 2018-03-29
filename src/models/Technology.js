const Model = require('../../bootstrap/dbModel')

class Technology extends Model {
  static get tableName () {
    return 'technologies'
  }

  projects (args, context) {
    return this.$relatedQuery('projects')
  }

  hackathons (args, context) {
    return this.$relatedQuery('hackathons')
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Project = require('./Project')
    const Hackathon = require('./Hackathon')

    return {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Project,
        join: {
          from: 'technologies.id',
          through: {
            from: 'projects_technologies.technology_id',
            to: 'projects_technologies.project_id'
          },
          to: 'projects.id'
        }
      },
      hackathons: {
        relation: Model.ManyToManyRelation,
        modelClass: Hackathon,
        join: {
          from: 'technologies.id',
          through: {
            from: 'hackathons_technologies.technology_id',
            to: 'hackathons_technologies.hackathon_id'
          },
          to: 'hackathons.id'
        }
      }
    }
  }
}

module.exports = Technology
