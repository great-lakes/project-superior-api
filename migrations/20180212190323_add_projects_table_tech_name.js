exports.up = (knex, Promise) =>
  knex.schema.table('projects', table => {
    table.string('tech_name')
  })

exports.down = (knex, Promise) =>
  knex.schema.table('projects', table => {
    table.dropColumn('tech_name')
  })
