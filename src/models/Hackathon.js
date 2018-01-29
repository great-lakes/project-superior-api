const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Hackathon', {
  tableName: 'hackathons',
  relations: ['projects', 'azurecodes', 'students'],
  projects: function () {
    return this.hasMany('Project')
  },
  azurecodes: function () {
    return this.hasMany('Azurecodes')
  },
  students: function () {
    return this.hasMany('Student').through('Project')
  }
})
