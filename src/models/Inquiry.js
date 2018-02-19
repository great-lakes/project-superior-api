const Model = require('../../bootstrap/dbModel')
const eventBus = require('../support/eventBus')

class Inquiry extends Model {
  static get tableName () {
    return 'inquiries'
  }

  $beforeInsert () {
    this.created_at = new Date().toISOString()
  }

  $beforeUpdate () {
    this.updated_at = new Date().toISOString()
  }

  $afterUpdate (opt, queryContext) {
    eventBus.emit('inquiry-updated')
  }

  $afterInsert (queryContext) {
    eventBus.emit('inquiry-created')
  }

  mentor (args, {loaders}) {
    if (this.mentor_id) {
      return loaders.mentor.load(this.mentor_id)
    }
    return null
  }

  student (args, {loaders}) {
    return loaders.student.load(this.student_id)
  }

  skill (args, {loaders}) {
    return loaders.skill.load(this.skill_id)
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Mentor = require('./Mentor')
    const Student = require('./Student')
    const Skill = require('./Skill')

    return {
      mentor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Mentor,
        join: {
          from: 'inquiries.mentor_id',
          to: 'mentors.id'
        }
      },
      student: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'inquiries.student_id',
          to: 'students.id'
        }
      },
      skill: {
        relation: Model.BelongsToOneRelation,
        modelClass: Skill,
        join: {
          from: 'inquiries.skill_id',
          to: 'skills.id'
        }
      }
    }
  }
}

module.exports = Inquiry
