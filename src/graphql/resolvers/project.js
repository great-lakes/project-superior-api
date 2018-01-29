// const Project = require('../../models/Project')
const project = require('../../loaders/project')
const hackathon = require('../../loaders/hackathon')
const related = ['hackathon', 'students']

module.exports = (args = {}) => {
  // if (Object.keys(args).length === 0) {
  //   return new Project().fetchAll({ withRelated: related }).then((collection) => collection.toJSON())
  // } else {
  //   return new Project({id: args.id})
  //     .fetch({withRelated: related})
  //     .then(function (model) {
  //       return {
  //         id: model.get('id'),
  //         name: model.get('name'),
  //         description: model.get('description'),
  //         hackathon: function () {
  //           return require('./hackathon')({id: model.related('hackathon').id})
  //         }
  //       }
  //     })
  // }
  return project.load(args.id).then((model) => {
    const obj = model.toJSON()
    // obj.hackathon = hackathon.load(model.related('hackathon').id)
    return obj
  })
}
