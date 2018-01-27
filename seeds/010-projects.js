const dbName = 'projects'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          name: 'Fire Fighting Robot',
          description: 'A robot that will find a water source, and seek out fires to put out',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          hackathon_id: 1
        }
      ])
