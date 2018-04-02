const dbName = 'hackathons_surveys'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {hackathon_id: 1, survey_id: 1}
      ])
