const dbName = 'azurecodes'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          code: 'abc',
          expires_on: '2018-03-01',
          project_id: 1,
          hackathon_id: 1
        }
      ])
