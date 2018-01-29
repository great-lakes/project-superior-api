const dbName = 'students'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          name: 'Alice Blake',
          email: 'alice@example.com',
          phone: '123-555-2345',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 1
        }, {
          name: 'Bob Blob',
          email: 'bob@example.com',
          phone: '123-555-1234',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 1
        }, {
          name: 'Cindy Blair',
          email: 'cindy@example.com',
          phone: '123-555-3456',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 1
        }, {
          name: 'Adam Clark',
          email: 'adam@example.com',
          phone: '123-555-4567',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 2
        }, {
          name: 'Brock C',
          email: 'brock@example.com',
          phone: '123-555-5678',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 2
        }, {
          name: 'Abe Dill',
          email: 'abe@example.com',
          phone: '123-555-6789',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 3
        }, {
          name: 'Abby Evans',
          email: 'abby@example.com',
          phone: '123-555-7890',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          project_id: 4
        }
      ])
