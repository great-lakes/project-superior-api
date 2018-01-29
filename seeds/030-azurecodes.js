const dbName = 'azurecodes'
exports.seed = (knex, Promise) =>
      knex(dbName).insert([
        {
          code: 'abc',
          expires_on: '2018-03-01',
          project_id: 1,
          hackathon_id: 1
        }, {
          code: 'def',
          expires_on: '2018-03-01',
          project_id: 2,
          hackathon_id: 1
        }, {
          code: 'ghi',
          expires_on: '2018-03-01',
          project_id: 3,
          hackathon_id: 1
        }, {
          code: 'jkl',
          expires_on: '2018-03-01',
          project_id: 4,
          hackathon_id: 1
        }, {
          code: 'mno',
          expires_on: '2018-03-01',
          project_id: null,
          hackathon_id: 1
        }, {
          code: 'pqr',
          expires_on: '2018-03-01',
          project_id: null,
          hackathon_id: 1
        }, {
          code: 'stu',
          expires_on: '2018-03-01',
          project_id: null,
          hackathon_id: 1
        }, {
          code: 'vwx',
          expires_on: '2018-10-01',
          project_id: null,
          hackathon_id: 2
        }, {
          code: 'yz0',
          expires_on: '2018-10-01',
          project_id: null,
          hackathon_id: 2
        }
      ])
