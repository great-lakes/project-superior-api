const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Mentor', {
  tableName: 'mentors',
  hackathons: function () {
    return this.belongsToMany('Hackathon')
  },
  inquiries: function () {
    return this.hasMany('Inquiry')
  },
  skills: function () {
    return this.belongsToMany('Skill')
  }
})
