exports.up = (knex, Promise) =>
  knex.schema.createTable('hackathons_mentors', (table) => {
    table.integer('hackathon_id')
      .unsigned().index()
      .references('id').inTable('hackathons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('mentor_id')
      .unsigned().index()
      .references('id').inTable('mentors')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['hackathon_id', 'mentor_id'])
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('hackathons_mentors')
