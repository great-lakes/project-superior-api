exports.up = (knex, Promise) =>
  knex.schema.createTable('azurecodes', (table) => {
    table.increments('id')
    table.string('code')
    table.date('expires_on')
    table.boolean('is_taken').defaultTo(false)
    table.integer('student_id')
      .unsigned().index().nullable()
      .references('id').inTable('students')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('hackathon_id')
      .unsigned().index()
      .references('id').inTable('hackathons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('azurecodes')
