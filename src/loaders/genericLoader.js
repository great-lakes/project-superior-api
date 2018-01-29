const DataLoader = require('dataloader')

module.exports = (Model) => {
  return new DataLoader((keys) =>
    Promise.all(keys.map((key) => {
      return Model
        .forge()
        .fetch({id: key, withRelated: Model.relations})
        .then((model) => {
          // const json = project.toJSON()
          return model
        })
    })
  ))
}
