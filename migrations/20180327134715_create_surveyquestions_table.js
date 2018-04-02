exports.up = (knex, Promise) =>
knex.schema.createTable('surveyquestions', (table) => {
  table.increments('id')
  table.string('prompt')
  table.string('type')
  table.integer('survey_id')
      .unsigned().index()
      .references('id').inTable('surveys')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  table.integer('order').unsigned()
})

exports.down = (knex, Promise) => knex.schema.dropTable('surveyquestions')
