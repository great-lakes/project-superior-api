const dbName = 'technologies'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {name: 'Azure'},
        {name: 'Hololens'},
        {name: 'Xamarin'},
        {name: '.NET Core'},
        {name: 'UWP'},
        {name: 'Azure Web App'},
        {name: 'Azure ML Studio'},
        {name: 'Azure Container Services'},
        {name: 'Azure Iothub'},
        {name: 'CNTK'},
        {name: 'Bot Framework'}
      ])
