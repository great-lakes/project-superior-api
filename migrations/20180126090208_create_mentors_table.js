exports.up = (knex, Promise) =>
  knex.schema.createTable('mentors', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.text('bio')
    table.string('email')
    table.string('phone')
    table.boolean('is_available')
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('mentors')
