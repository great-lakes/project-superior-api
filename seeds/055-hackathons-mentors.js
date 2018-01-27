const dbName = 'hackathons_mentors'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {hackathon_id: 1, mentor_id: 1}
      ])
