const dbName = 'mentors'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          first_name: 'Hao',
          last_name: 'Luo',
          bio: 'Hao loves Javascript and the web',
          email: 'test@example.com',
          phone: '234-555-1293',
          is_available: true
        }
      ])
