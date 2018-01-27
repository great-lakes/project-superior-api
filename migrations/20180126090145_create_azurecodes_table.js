exports.up = (knex, Promise) =>
  knex.schema.createTable('azurecodes', (table) => {
    table.increments('id')
    table.string('code')
    table.date('expires_on')
    table.boolean('is_taken')
    table.integer('project_id')
      .unsigned().index().nullable()
      .references('id').inTable('projects')
      .onDelete('SET NULL')
      .onUpdate('CASCADE')
    table.integer('hackathon_id')
      .unsigned().index()
      .references('id').inTable('hackathons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('azurecodes')
