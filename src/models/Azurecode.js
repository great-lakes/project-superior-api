const Model = require('../../bootstrap/dbModel')
const eventBus = require('../support/eventBus')
/**
 * Azure code model
 *
 * @class Azurecode
 * @extends {Model}
 */

class Azurecode extends Model {
  static get tableName () {
    return 'azurecodes'
  }

  project (args, context) {
    return this.$relatedQuery('project')
  }

  hackathon (args, context) {
    return this.$relatedQuery('hackathon')
  }

  student (args, context) {
    return this.$relatedQuery('student')
  }

  $afterUpdate (opt, queryContext) {
    eventBus.emit('azurecode-updated', {id: this.id})
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Student = require('./Student')
    const Hackathon = require('./Hackathon')

    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'azurecodes.student_id',
          to: 'students.id'
        }
      },
      hackathon: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hackathon,
        join: {
          from: 'azurecodes.hackathon_id',
          to: 'hackathons.id'
        }
      }
    }
  }
}

module.exports = Azurecode
