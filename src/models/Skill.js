const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Skill', {
  tableName: 'skills',
  mentors: function () {
    return this.belongsToMany('Mentor')
  },
  inquiries: function () {
    return this.hasMany('Inquiry')
  }
})
