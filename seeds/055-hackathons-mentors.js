const dbName = 'hackathons_mentors'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {hackathon_id: 1, mentor_id: 1},
        {hackathon_id: 1, mentor_id: 2},
        {hackathon_id: 1, mentor_id: 3},
        {hackathon_id: 1, mentor_id: 4},
        {hackathon_id: 1, mentor_id: 5},
        {hackathon_id: 2, mentor_id: 5},
        {hackathon_id: 2, mentor_id: 2},
        {hackathon_id: 2, mentor_id: 3},
        {hackathon_id: 2, mentor_id: 4}
      ])
