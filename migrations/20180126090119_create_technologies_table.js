exports.up = (knex, Promise) =>
  knex.schema.createTable('technologies', (table) => {
    table.increments('id')
    table.string('name')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('technologies')
