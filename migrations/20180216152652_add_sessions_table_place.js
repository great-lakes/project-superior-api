exports.up = (knex, Promise) =>
  knex.schema.table('sessions', table => {
    table.string('place')
  })

exports.down = (knex, Promise) =>
  knex.schema.table('sessions', table => {
    table.dropColumn('place')
  })
