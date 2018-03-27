exports.up = (knex, Promise) =>
knex.schema.createTable('survey-choices', (table) => {
  table.increments('id')
  table.integer('survey-question_id')
      .unsigned().index()
      .references('id').inTable('survey-questions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  table.string('value')
  table.integer('order').unsigned()
})

exports.down = (knex, Promise) => knex.schema.dropTable('survey-choices')
