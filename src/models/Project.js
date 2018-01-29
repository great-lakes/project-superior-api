const bookshelf = require('../../bootstrap/bookshelf')

module.exports = bookshelf.model('Project', {
  tableName: 'projects',
  hasTimestamps: true,
  relations: function () {
    return ['students', 'hackathon', 'technologies', 'azurecode']
  },
  students: function () {
    return this.hasMany('Student')
  },
  hackathon: function () {
    return this.belongsTo('Hackathon')
  },
  technologies: function () {
    return this.belongsToMany('Technology')
  },
  azurecode: function () {
    return this.hasOne('Azurecode')
  }
})
