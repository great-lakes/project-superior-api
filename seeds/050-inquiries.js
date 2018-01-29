const dbName = 'inquiries'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          question: 'How do I use React?',
          mentor_notes: 'Student needed to install node',
          is_resolved: true,
          student_id: 1,
          mentor_id: 1,
          skill_id: 2,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, {
          question: 'How do I use Azure?',
          mentor_notes: null,
          is_resolved: false,
          student_id: 1,
          mentor_id: null,
          skill_id: 13,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, {
          question: 'How do I use ML Studio?',
          mentor_notes: null,
          is_resolved: false,
          student_id: 1,
          mentor_id: null,
          skill_id: 13,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, {
          question: 'My Flask App will not deploy',
          mentor_notes: null,
          is_resolved: false,
          student_id: 4,
          mentor_id: 4,
          skill_id: 4,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, {
          question: 'My bot is not responding',
          mentor_notes: 'He needed to install ngrok pointed him to [this solution](https://www.google.com)',
          is_resolved: true,
          student_id: 3,
          mentor_id: 3,
          skill_id: 8,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, {
          question: 'My Xamarin app does not compile',
          mentor_notes: null,
          is_resolved: false,
          student_id: 3,
          mentor_id: null,
          skill_id: 3,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
