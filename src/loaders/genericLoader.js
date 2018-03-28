const DataLoader = require('dataloader')

module.exports = (Model) => {
  return new DataLoader((keys) =>
    Promise.all(keys.map((key) => {
      return Model
        .query()
        .findById(key)
        // .eager('[' + Object.keys(Model.relationMappings).join(',') + ']')
    })
  ))
}
