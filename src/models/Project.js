const Model = require('../../bootstrap/dbModel')

class Project extends Model {
  static get tableName () {
    return 'projects'
  }

  hackathon () {
    const {hackathon} = require('../loaders')
    return hackathon.load(this.hackathon_id)
  }

  students () {
    const {student} = require('../loaders')
    return this.$relatedQuery('students')
      .then(students => student.loadMany(students.map(stu => stu.id)))
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Student = require('./Student')
    const Technology = require('./Technology')
    const Hackathon = require('./Hackathon')

    return {
      students: {
        relation: Model.HasManyRelation,
        modelClass: Student,
        join: {
          from: 'projects.id',
          to: 'students.project_id'
        }
      },
      technologies: {
        relation: Model.ManyToManyRelation,
        modelClass: Technology,
        join: {
          from: 'projects.id',
          through: {
            from: 'projects_technologies.project_id',
            to: 'projects_technologies.technology_id'
          },
          to: 'technologies.id'
        }
      },
      hackathon: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hackathon,
        join: {
          from: 'projects.hackathon_id',
          to: 'hackathons.id'
        }
      }
    }
  }
}

module.exports = Project
