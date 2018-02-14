const Model = require('../../bootstrap/dbModel')

class Session extends Model {
  static get tableName () {
    return 'sessions'
  }

  hackathon (args, {loaders}) {
    return loaders.hackathon.load(this.hackathon_id)
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
