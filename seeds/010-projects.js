const dbName = 'projects'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          name: 'Fire Fighting Robot',
          description: 'A robot that will find a water source, and seek out fires to put out',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          hackathon_id: 1
        }, {
          name: 'Tweet Alert Bot',
          description: 'A chat bot that notifies you when a certain hashtag is tweeted.  And you can ask the bot to tweet things out for you at a certain interval',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          hackathon_id: 1
        }, {
          name: 'Game for good',
          description: 'Everytime you play the game, the score is equal to how many drops of water will be donated to Charity Water',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          hackathon_id: 1
        }, {
          name: 'Small Talk AI',
          description: 'An AI model that will keep the conversation going. Drawing from wikipedia, and gamification theories to keep the human engaged.',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          hackathon_id: 1
        }
      ])
