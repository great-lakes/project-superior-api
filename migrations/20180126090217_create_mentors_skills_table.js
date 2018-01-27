exports.up = (knex, Promise) =>
  knex.schema.createTable('mentors_skills', (table) => {
    table.integer('mentor_id')
      .unsigned().index()
      .references('id').inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('skill_id')
      .unsigned().index()
      .references('id').inTable('technologies')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['mentor_id', 'skill_id'])
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('mentors_skills')
