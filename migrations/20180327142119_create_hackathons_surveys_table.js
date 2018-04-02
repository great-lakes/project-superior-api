exports.up = (knex, Promise) =>
  knex.schema.createTable('hackathons_surveys', (table) => {
    table.integer('hackathon_id')
      .unsigned()
      .references('id').inTable('hackathons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('survey_id')
      .unsigned()
      .references('id').inTable('surveys')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['hackathon_id', 'survey_id'])
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('hackathons_surveys')
