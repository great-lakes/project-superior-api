
exports.up = (knex, Promise) =>
  knex.schema.createTable('hackathons', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.date('start_date')
    table.date('end_date')
    table.string('bot_deployed')
  })

exports.down = (knex, Promise) => knex.schema.dropTable('hackathons')
