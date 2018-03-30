const dbName = 'surveychoices'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      surveyquestion_id: 1,
      value: 'Machine Learning',
      order: 1
    }, {
      surveyquestion_id: 1,
      value: 'Computer Vision',
      order: 2
    }, {
      surveyquestion_id: 1,
      value: 'Web Service',
      order: 3
    }, {
      surveyquestion_id: 1,
      value: 'Big Data',
      order: 4
    }, {
      surveyquestion_id: 1,
      value: 'Chat Bot',
      order: 5
    }, {
      surveyquestion_id: 2,
      value: 'Python',
      order: 1
    }, {
      surveyquestion_id: 2,
      value: 'Javascript',
      order: 2
    }, {
      surveyquestion_id: 2,
      value: 'C++',
      order: 3
    }, {
      surveyquestion_id: 2,
      value: 'C#',
      order: 4
    }, {
      surveyquestion_id: 2,
      value: 'Scala',
      order: 5
    }, {
      surveyquestion_id: 2,
      value: 'Java',
      order: 6
    }, {
      surveyquestion_id: 3,
      value: 'Amazon',
      order: 1
    }, {
      surveyquestion_id: 3,
      value: 'Microsoft',
      order: 2
    }, {
      surveyquestion_id: 3,
      value: 'Facebook',
      order: 3
    }, {
      surveyquestion_id: 3,
      value: 'Google',
      order: 4
    }
  ])
