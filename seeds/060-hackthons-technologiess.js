const dbName = 'hackathons_technologies'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {hackathon_id: 1, technology_id: 1},
        {hackathon_id: 1, technology_id: 2},
        {hackathon_id: 1, technology_id: 3},
        {hackathon_id: 1, technology_id: 4},
        {hackathon_id: 1, technology_id: 5},
        {hackathon_id: 1, technology_id: 6},
        {hackathon_id: 1, technology_id: 7},
        {hackathon_id: 1, technology_id: 8},
        {hackathon_id: 1, technology_id: 9},
        {hackathon_id: 1, technology_id: 10},
        {hackathon_id: 1, technology_id: 11}
      ])
