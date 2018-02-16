exports.up = (knex, Promise) =>
  knex.schema.createTable('hackathons_technologies', (table) => {
    table.integer('hackathon_id')
      .unsigned().index()
      .references('id').inTable('hackathons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('technology_id')
      .unsigned().index()
      .references('id').inTable('technologies')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['hackathon_id', 'technology_id'])
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('hackathons_technologies')
