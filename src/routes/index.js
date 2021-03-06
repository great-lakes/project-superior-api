const { graphiqlRestify } = require('apollo-server-restify')
const schema = require('../graphql/schema')
const {graphql} = require('graphql')
const rootResolver = require('../resolvers')
const createLoaders = require('../loaders')
const fs = require('fs')

module.exports = (server, appInsightClient) => {
  if (fs.existsSync('./src/routes/playground.js')) {
    require('./playground')(server)
  }

  server.get('/', (req, res, next) => {
    appInsightClient.trackNodeHttpRequest({request: req, response: res})
    res.json({name: 'Hanna Bot API'})
  })

  server.post('/graphql', (req, res, next) => {
    appInsightClient.trackNodeHttpRequest({request: req, response: res})
    if (req.query.access_token !== process.env.GRAPHQL_ACCESS_TOKEN) {
      return res.json({message: 'Not Authorized'})
    }

    graphql({
      schema,
      source: req.body.query,
      rootValue: rootResolver,
      contextValue: {
        loaders: createLoaders()
      },
      variableValues: req.body.variables
    }).then((response) => {
      res.json(response)
    })
  })

  server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))
}
