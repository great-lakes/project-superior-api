exports.up = (knex, Promise) =>
  knex.schema.createTable('sessions', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('time')
    table.string('day')
    table.integer('attendance')
    table.integer('hackathon_id')
      .unsigned().index()
      .references('id')
      .inTable('hackathons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('sessions')
