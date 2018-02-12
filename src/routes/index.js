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
    if (req.query.access_token !== process.env.GRAPHQL_ACCESS_TOKEN) {
      return res.json({message: 'Not Authorized'})
    }

    graphql({
      schema,
      source: req.body.query,
      rootValue: rootResolver,
      variableValues: req.body.variables
    }).then((response) => {
      res.json(response)
    })
  })

  server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))
}
