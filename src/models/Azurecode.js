const Model = require('../../bootstrap/dbModel')

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

  student (args, {loaders}) {
    if (this.student_id) {
      return loaders.student.load(this.student_id)
    }
    return null
  }

  hackathon (args, {loaders}) {
    return loaders.hackathon.load(this.hackathon_id)
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
