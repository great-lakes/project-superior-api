const Model = require('../../bootstrap/dbModel')

class Mentor extends Model {
  static get tableName () {
    return 'mentors'
  }

  skills (args, {loaders}) {
    return this.$relatedQuery('skills').then((skills) => {
      return loaders.skill.loadMany(skills.map(_ => _.id))
    })
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Hackathon = require('./Hackathon')
    const Inquiry = require('./Inquiry')
    const Skill = require('./Skill')

    return {
      hackathons: {
        relation: Model.ManyToManyRelation,
        modelClass: Hackathon,
        join: {
          from: 'mentors.id',
          through: {
            from: 'hackathons_mentors.mentor_id',
            to: 'hackathons_mentors.mentor_id'
          },
          to: 'hackathons.id'
        }
      },
      inquiries: {
        relation: Model.HasManyRelation,
        modelClass: Inquiry,
        join: {
          from: 'mentors.id',
          to: 'inquiries.mentor_id'
        }
      },
      skills: {
        relation: Model.ManyToManyRelation,
        modelClass: Skill,
        join: {
          from: 'mentors.id',
          through: {
            from: 'mentors_skills.mentor_id',
            to: 'mentors_skills.skill_id'
          },
          to: 'skills.id'
        }
      }
    }
  }
}

module.exports = Mentor
