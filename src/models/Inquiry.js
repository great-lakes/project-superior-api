const Model = require('../../bootstrap/dbModel')

class Inquiry extends Model {
  static get tableName () {
    return 'inquiries'
  }

  mentor () {
    const { mentor } = require('../loaders')
    if (this.mentor_id) {
      return mentor.load(this.mentor_id)
    }
    return null
  }

  student () {
    const { student } = require('../loaders')
    return student.load(this.student_id)
  }

  skill () {
    const { skill } = require('../loaders')
    return skill.load(this.skill_id)
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
