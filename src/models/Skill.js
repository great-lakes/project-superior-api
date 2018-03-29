const Model = require('../../bootstrap/dbModel')

class Skill extends Model {
  static get tableName () {
    return 'skills'
  }

  inquiries (args, context) {
    return this.$relatedQuery('inquiries')
  }

  mentors (args, context) {
    return this.$relatedQuery('mentors')
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Inquiry = require('./Inquiry')
    const Mentor = require('./Mentor')

    return {
      inquiries: {
        relation: Model.HasManyRelation,
        modelClass: Inquiry,
        join: {
          from: 'skills.id',
          to: 'inquiries.skill_id'
        }
      },
      mentors: {
        relation: Model.ManyToManyRelation,
        modelClass: Mentor,
        join: {
          from: 'skills.id',
          through: {
            from: 'mentors_skills.skill_id',
            to: 'mentors_skills.mentor_id'
          },
          to: 'mentors.id'
        }
      }
    }
  }
}

module.exports = Skill
