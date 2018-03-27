const dbName = 'surveyquestions'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      prompt: 'What is your first name?',
      type: 'text',
      survey_id: 1,
      order: 1
    }, {
      prompt: 'What is your last name?',
      type: 'text',
      survey_id: 1,
      order: 2
    }, {
      prompt: 'What is your major?',
      type: 'choice',
      survey_id: 1,
      order: 3
    }
  ])
