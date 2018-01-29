const dbName = 'projects_technologies'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {project_id: 1, technology_id: 1},
        {project_id: 1, technology_id: 2},
        {project_id: 1, technology_id: 4},
        {project_id: 2, technology_id: 7},
        {project_id: 2, technology_id: 3},
        {project_id: 3, technology_id: 4},
        {project_id: 3, technology_id: 7},
        {project_id: 3, technology_id: 3},
        {project_id: 4, technology_id: 9},
        {project_id: 4, technology_id: 11}
      ])
