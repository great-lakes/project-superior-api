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
    },

    {
      surveyquestion_id: 1,
      value: 'Bob',
      surveychoice_id: null,
      surveysubmission_id: 2
    }, {
      surveyquestion_id: 2,
      value: 'Lee',
      surveychoice_id: null,
      surveysubmission_id: 2
    }, {
      surveyquestion_id: 3,
      value: null,
      surveychoice_id: 2,
      surveysubmission_id: 2
    },

    {
      surveyquestion_id: 1,
      value: 'John',
      surveychoice_id: null,
      surveysubmission_id: 3
    }, {
      surveyquestion_id: 2,
      value: 'Doe',
      surveychoice_id: null,
      surveysubmission_id: 3
    }, {
      surveyquestion_id: 3,
      value: null,
      surveychoice_id: 2,
      surveysubmission_id: 3
    },

    {
      surveyquestion_id: 1,
      value: 'Alice',
      surveychoice_id: null,
      surveysubmission_id: 4
    }, {
      surveyquestion_id: 2,
      value: 'Bae',
      surveychoice_id: null,
      surveysubmission_id: 4
    }, {
      surveyquestion_id: 3,
      value: null,
      surveychoice_id: 2,
      surveysubmission_id: 4
    }
  ])
