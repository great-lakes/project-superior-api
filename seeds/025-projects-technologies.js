const dbName = 'projects_technologies'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {project_id: 1, technology_id: 1},
        {project_id: 1, technology_id: 2},
        {project_id: 1, technology_id: 4}
      ])
