const dbName = 'technologies'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {name: 'Azure'},
        {name: 'Hololens'},
        {name: 'Xamarin'},
        {name: '.NET Core'}
      ])
