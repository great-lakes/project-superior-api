const dbName = 'surveysubmissions'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      hackathon_id: 1,
      survey_id: 1,
      student_id: 1
    }, {
      hackathon_id: 1,
      survey_id: 1,
      student_id: 2
    }, {
      hackathon_id: 1,
      survey_id: 1,
      student_id: 3
    }, {
      hackathon_id: 1,
      survey_id: 1,
      student_id: 4
    }
  ])
