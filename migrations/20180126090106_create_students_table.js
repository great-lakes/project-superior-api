exports.up = (knex, Promise) =>
  knex.schema.createTable('students', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.timestamps()
    table.integer('project_id')
      .unsigned().index().nullable()
      .references('id').inTable('projects')
      .onDelete('SET NULL')
      .onUpdate('CASCADE')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('students')
