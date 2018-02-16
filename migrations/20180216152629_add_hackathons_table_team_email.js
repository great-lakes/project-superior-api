exports.up = (knex, Promise) =>
  knex.schema.table('hackathons', table => {
    table.string('team_email')
  })

exports.down = (knex, Promise) =>
  knex.schema.table('hackathons', table => {
    table.dropColumn('team_email')
  })
