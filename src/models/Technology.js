const Model = require('../../bootstrap/dbModel')

class Technology extends Model {
  static get tableName () {
    return 'technologies'
  }
  static get relationMappings () {
    // Import models here to prevent require loops.
    const Technology = require('./Technology')

    return {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Technology,
        join: {
          from: 'technologies.id',
          through: {
            from: 'projects_technologies.technology_id',
            to: 'projects_technologies.project_id'
          },
          to: 'projects.id'
        }
      }
    }
  }
}

module.exports = Technology
