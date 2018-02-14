exports.up = (knex, Promise) =>
  knex.schema.table('hackathons', table => {
    table.string('bot_directline_key')
    table.string('survey_link')
    table.text('survey_promo')
    table.string('survey_prize')
  })

exports.down = (knex, Promise) =>
  knex.schema.table('hackathons', table => {
    table.dropColumn('bot_directline_key')
    table.dropColumn('survey_link')
    table.dropColumn('survey_promo')
    table.dropColumn('survey_prize')
  })
