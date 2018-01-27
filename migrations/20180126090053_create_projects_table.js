exports.up = (knex, Promise) =>
  knex.schema.createTable('projects', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.timestamps()
    table.integer('hackathon_id')
      .unsigned().index()
      .references('id').inTable('hackathons')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('projects')
