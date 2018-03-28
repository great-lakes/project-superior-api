const dbName = 'surveyanswers'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      surveyquestion_id: 1,
      value: 'Jane',
      surveychoice_id: null,
      surveysubmission_id: 1
    }, {
      surveyquestion_id: 2,
      value: 'Doe',
      surveychoice_id: null,
      surveysubmission_id: 1
    }, {
      surveyquestion_id: 3,
      value: null,
      surveychoice_id: 2,
      surveysubmission_id: 1
    }
  ])
