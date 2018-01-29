const dbName = 'mentors'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          first_name: 'Hao',
          last_name: 'Luo',
          bio: 'Hao loves Javascript and the web',
          email: 'hao@example.com',
          phone: '234-555-1293',
          is_available: true
        }, {
          first_name: 'David',
          last_name: 'Washington',
          bio: 'Anything Realtime with websockets and webRTC',
          email: 'david@example.com',
          phone: '234-555-1295',
          is_available: false
        }, {
          first_name: 'Kevin',
          last_name: 'Leung',
          bio: 'IoT Master and ask him anything about bots',
          email: 'kevin@example.com',
          phone: '234-555-1295',
          is_available: false
        }, {
          first_name: 'Gabrielle',
          last_name: 'Crevecoeur',
          bio: 'Knows everything about IoT and has a real passion with hardware',
          email: 'gabby@example.com',
          is_available: true
        }, {
          first_name: 'Sarah',
          last_name: 'Sexton',
          bio: 'Ask her anything about AR/VR/MR. ',
          email: 'sarah@example.com',
          is_available: true
        }
      ])
