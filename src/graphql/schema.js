const { buildSchema } = require('graphql')
const fs = require('fs')

const schemaText = fs.readFileSync('./src/graphql/schema.gql', 'utf8')
// Construct a schema, using GraphQL schema language
const schema = buildSchema(schemaText)

module.exports = schema
