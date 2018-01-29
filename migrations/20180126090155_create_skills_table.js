exports.up = (knex, Promise) =>
  knex.schema.createTable('skills', (table) => {
    table.increments('id')
    table.string('name')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('skills')
