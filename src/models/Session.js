const Model = require('../../bootstrap/dbModel')

class Session extends Model {
  static get tableName () {
    return 'sessions'
  }

  hackathon (args, context) {
    return this.$relatedQuery('hackathon')
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Hackathon = require('./Hackathon')

    return {
      hackathon: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hackathon,
        join: {
          from: 'sessions.hackathon_id',
          to: 'hackathons.id'
        }
      }
    }
  }
}

module.exports = Session
