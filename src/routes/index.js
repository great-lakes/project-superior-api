const { graphiqlRestify } = require('apollo-server-restify')
const schema = require('../graphql/schema')
const {graphql} = require('graphql')
const rootResolver = require('../graphql/resolvers')
const fs = require('fs')

module.exports = (server) => {
  if (fs.existsSync('./src/routes/playground.js')) {
    require('./playground')(server)
  }

  server.post('/graphql', (req, res, next) => {
    graphql(schema, req.body.query, rootResolver).then((response) => {
      res.json(response)
    })
  })

  server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))
}
