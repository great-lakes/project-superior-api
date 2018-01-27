const dbName = 'skills'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {name: 'Javascript'},
        {name: 'React'},
        {name: 'Mobile'},
        {name: 'Python'},
        {name: 'Hololens'},
        {name: '.NET Core'},
        {name: 'IoT'},
        {name: 'Bots'},
        {name: 'AI/ML'},
        {name: 'Tensorflow'}
      ])
