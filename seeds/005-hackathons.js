const dbName = 'hackathons'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      name: 'HackIllinois 2018',
      description: 'The hackathon that takes place in Urbana, IL at University of Illinois Campus',
      start_date: '2018-02-23',
      end_date: '2018-02-25',
      bot_deployed: 'https://hackillinois-bot.azurewebsites.net'
    },
    {
      name: 'MHacks 2018',
      description: 'The hackathon that takes place in University of Michigan.',
      start_date: '2018-09-20',
      end_date: '2018-09-23',
      bot_deployed: null
    }
  ])
