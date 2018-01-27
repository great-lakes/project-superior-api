const dbName = 'students'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          name: 'Joe Bob',
          email: 'joebobby@example.com',
          phone: '123-555-1234',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 1
        }
      ])
