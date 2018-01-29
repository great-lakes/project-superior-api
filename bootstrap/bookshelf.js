var knex = require('knex')({
  client: process.env.DB_SYSTEM,
  connection: process.env.DB_CONNECTION_STRING
})
const Bookshelf = require('bookshelf')(knex)

Bookshelf.plugin('registry')

module.exports = Bookshelf
