const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Technology', {
  tableName: 'technologies',
  projects: function () {
    return this.belongsToMany('Project')
  }
})
