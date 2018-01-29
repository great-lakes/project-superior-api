const Student = require('../../models/Student')

const related = ['inquires', 'project', 'hackathon']
module.exports = (args) => {
  if (Object.keys(args).length === 0 && args.constructor === Object) {
    return new Student().fetchAll({ withRelated: related }).then((collection) => collection.toJSON())
  } else {
    return new Student({id: args.id})
      .fetch({withRelated: related})
      .then(function (model) {
        return {
          id: model.get('id'),
          name: model.get('name')
        }
      })
  }
}
