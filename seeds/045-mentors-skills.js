const dbName = 'mentors_skills'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {mentor_id: 1, skill_id: 1},
        {mentor_id: 1, skill_id: 2},
        {mentor_id: 1, skill_id: 4},
        {mentor_id: 2, skill_id: 11},
        {mentor_id: 2, skill_id: 12},
        {mentor_id: 2, skill_id: 3},
        {mentor_id: 3, skill_id: 8},
        {mentor_id: 3, skill_id: 10},
        {mentor_id: 4, skill_id: 10},
        {mentor_id: 4, skill_id: 6},
        {mentor_id: 5, skill_id: 5},
        {mentor_id: 5, skill_id: 9}
      ])
