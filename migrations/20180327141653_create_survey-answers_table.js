exports.up = (knex, Promise) =>
knex.schema.createTable('survey-answers', (table) => {
  table.increments('id')
  table.integer('survey-question_id')
      .unsigned().index()
      .references('id').inTable('survey-questions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  table.string('value')
  table.integer('hackathon_id')
      .unsigned().index()
      .references('id').inTable('hackathons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
})

exports.down = (knex, Promise) => knex.schema.dropTable('survey-answers')
