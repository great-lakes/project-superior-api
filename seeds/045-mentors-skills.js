const dbName = 'mentors_skills'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {mentor_id: 1, skill_id: 1},
        {mentor_id: 1, skill_id: 2},
        {mentor_id: 1, skill_id: 4}
      ])
