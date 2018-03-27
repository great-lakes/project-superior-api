const dbName = 'surveychoices'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      surveyquestion_id: 3,
      value: 'CE',
      order: 1
    }, {
      surveyquestion_id: 3,
      value: 'EE',
      order: 2
    }, {
      surveyquestion_id: 3,
      value: 'CS',
      order: 3
    }, {
      surveyquestion_id: 3,
      value: 'ME',
      order: 4
    }, {
      surveyquestion_id: 3,
      value: 'Biology',
      order: 5
    }, {
      surveyquestion_id: 3,
      value: 'Other',
      order: 6
    }
  ])
