const { graphiqlRestify } = require('apollo-server-restify')
const schema = require('../graphql/schema')
const {graphql} = require('graphql')
const rootResolver = require('../resolvers')
const fs = require('fs')

module.exports = (server) => {
  if (fs.existsSync('./src/routes/playground.js')) {
    require('./playground')(server)
  }

  server.post('/graphql', (req, res, next) => {
    graphql({
      schema,
      source: req.body.query,
      rootValue: rootResolver
      // contextValue: {loaders}
    }).then((response) => {
      res.json(response)
    })
  })

  server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))
}
