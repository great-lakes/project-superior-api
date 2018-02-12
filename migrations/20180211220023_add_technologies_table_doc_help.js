exports.up = (knex, Promise) =>
  knex.schema.table('technologies', table => {
    table.string('doc_link')
    table.text('help_text')
  })

exports.down = (knex, Promise) =>
  knex.schema.table('technologies', table => {
    table.dropColumn('doc_link')
    table.dropColumn('help_text')
  })
