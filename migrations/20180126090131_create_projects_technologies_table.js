exports.up = (knex, Promise) =>
  knex.schema.createTable('projects_technologies', (table) => {
    table.integer('project_id')
      .unsigned().index()
      .references('id').inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('technology_id')
      .unsigned().index()
      .references('id').inTable('technologies')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['project_id', 'technology_id'])
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('projects_technologies')
