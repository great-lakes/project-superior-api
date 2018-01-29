const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Azurecode', {
  tableName: 'azurecodes',
  project: function () {
    return this.belongsTo('Project')
  },
  hackathon: function () {
    return this.belongsTo('Hackathon')
  }
})
