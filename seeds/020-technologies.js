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
        {name: 'Bot Framework', doc_link: 'https://dev.botframework.gettingStarted.example', help_text: 'Bots are a great way to create artificial human interaction with your users. Combine bots with Cognitive Services and you will be able to create an intelligent chatbot capable of understanding language intentions and much more.'}
      ])
