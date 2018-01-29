const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Student', {
  tableName: 'students',
  hasTimestamps: true,
  inquiries: function () {
    return this.hasMany('Inquiry')
  },
  project: function () {
    return this.belongsTo('Project')
  },
  hackathon: function () {
    return this.belongsTo('Hackathon').through('Project')
  }
})
