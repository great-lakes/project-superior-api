const Model = require('../../bootstrap/dbModel')

class Student extends Model {
  static get tableName () {
    return 'students'
  }

  project (args, {loaders}) {
    return loaders.project.load(this.project_id)
  }

  inquiries (args, {loaders}) {
    return this.$relatedQuery('inquiries')
      .then(inquiries => loaders.inquiry.loadMany(inquiries.map(inq => inq.id)))
  }

  static findWithEmail (hackathonId, email) {
    return this.query()
      .eager('project')
      .where({email})
      .then((students) => students.find((student) => student.project.hackathon_id === +hackathonId))
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Inquiry = require('./Inquiry')
    const Project = require('./Project')
    const Azurecode = require('./Azurecode')

    return {
      inquiries: {
        relation: Model.HasManyRelation,
        modelClass: Inquiry,
        join: {
          from: 'students.id',
          to: 'inquiries.student_id'
        }
      },
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: 'students.project_id',
          to: 'projects.id'
        }
      },
      azurecode: {
        relation: Model.HasOneRelation,
        modelClass: Azurecode,
        join: {
          from: 'students.id',
          to: 'azurecodes.student_id'
        }
      }
    }
  }
}

module.exports = Student
