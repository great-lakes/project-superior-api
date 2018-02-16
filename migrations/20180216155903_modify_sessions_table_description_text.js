exports.up = (knex, Promise) =>
  knex.schema.alterTable('sessions', table => {
    table.text('description').alter()
  })

exports.down = (knex, Promise) =>
  knex.schema.alterTable('sessions', table => {
    table.string('description').alter()
  })
