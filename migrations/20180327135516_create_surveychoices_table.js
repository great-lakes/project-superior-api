exports.up = (knex, Promise) =>
knex.schema.createTable('surveychoices', (table) => {
  table.increments('id')
  table.integer('surveyquestion_id')
    .unsigned().index()
    .references('id').inTable('surveyquestions')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  table.string('value')
  table.integer('order').unsigned()
})

exports.down = (knex, Promise) => knex.schema.dropTable('surveychoices')
