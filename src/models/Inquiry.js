const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Inquiry', {
  tableName: 'inquiries',
  hasTimestamps: true,
  mentor: function () {
    return this.belongsTo('Mentor')
  },
  student: function () {
    return this.belongsTo('Student')
  },
  skill: function () {
    return this.belongsTo('Skill')
  }
})
