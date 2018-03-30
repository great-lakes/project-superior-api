const dbName = 'surveyquestions'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      prompt: 'What technology do you want to work on? (select one)',
      type: 'CHOICE',
      survey_id: 1,
      order: 1
    }, {
      prompt: 'What language do you want to work on? (select one)',
      type: 'CHOICE',
      survey_id: 1,
      order: 2
    }, {
      prompt: 'What company do you want to work for the most? (select one)',
      type: 'CHOICE',
      survey_id: 1,
      order: 3
    }, {
      prompt: 'Can you tell me a little more about your project?',
      type: 'TEXT',
      survey_id: 1,
      order: 4
    }
  ])
