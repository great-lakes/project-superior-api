const dbName = 'sessions'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      name: 'Learn about Cognitive Services',
      description: 'Come and learn about Cognitive Services by our very own Kevin',
      time: '3-5pm',
      day: 'Friday',
      place: 'room 123',
      hackathon_id: 1
    },
    {
      name: 'Learn about Tensorflow',
      description: 'Come and learn about Tensor by our very own Samantha',
      time: '2-4pm',
      day: 'Saturay',
      place: 'courtyard',
      hackathon_id: 1
    },
    {
      name: 'Learn about Hololens',
      description: 'Come and learn about Cognitive Services by our very own Sarah',
      time: '3-5pm',
      day: 'Monday',
      place: 'TBD',
      hackathon_id: 1
    },
    {
      name: 'Learn about IoT',
      description: 'Come and learn about Cognitive Services by our very own Gabby',
      time: '3-5pm',
      day: 'Friday',
      hackathon_id: 2
    }
  ])
