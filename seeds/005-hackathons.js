const dbName = 'hackathons'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      name: 'HackIllinois 2018',
      slug: 'uiuc2018',
      description: 'The hackathon that takes place in Urbana, IL at University of Illinois Campus',
      start_date: '2018-02-23',
      end_date: '2018-02-25',
      bot_deployed: 'https://hackillinois-bot.azurewebsites.net',
      bot_directline_key: 'abc',
      survey_link: 'aka.ms/survey1',
      survey_promo: 'Come and fill our survey at {survey_link} and win a {survey_prize}',
      survey_prize: 'Hololens'
    },
    {
      name: 'MHacks 2018',
      slug: 'mhacks2018',
      description: 'The hackathon that takes place in University of Michigan.',
      start_date: '2018-09-20',
      end_date: '2018-09-23',
      bot_deployed: null,
      survey_link: 'aka.ms/survey2',
      survey_promo: 'Come and fill our awesome survey at {survey_link} and win a {survey_prize}',
      survey_prize: 'XBox One'
    }
  ])
