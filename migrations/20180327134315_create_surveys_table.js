exports.up = (knex, Promise) =>
  knex.schema.createTable('surveys', (table) => {
    table.increments('id')
    table.string('title')
    table.string('prize')
    table.string('link')
    table.string('promo')
  })

exports.down = (knex, Promise) => knex.schema.dropTable('surveys')
