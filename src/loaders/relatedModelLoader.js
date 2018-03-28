function relatedModelLoader (currentModel, loaders, relationName, loaderName) {
  return currentModel.$relatedQuery(relationName).then((queriedModels) => {
    return loaders[loaderName].loadMany(queriedModels.map(obj => obj.id))
  })
}

module.exports = relatedModelLoader
