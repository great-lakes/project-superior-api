exports.up = (knex, Promise) =>
  knex.schema.table('hackathons', table => {
    table.dropColumn('survey_link')
    table.dropColumn('survey_promo')
    table.dropColumn('survey_prize')
  })

exports.down = (knex, Promise) =>
  knex.schema.table('hackathons', table => {
    table.string('survey_link')
    table.string('survey_promo')
    table.string('survey_prize')
  })
