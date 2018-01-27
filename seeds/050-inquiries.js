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
        }
      ])
