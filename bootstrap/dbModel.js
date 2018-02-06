var knex = require('knex')({
  client: process.env.DB_SYSTEM,
  connection: process.env.DB_CONNECTION_STRING
})

const {Model} = require('objection')

Model.knex(knex)

module.exports = Model
