const dbName = 'surveys'
exports.seed = (knex, Promise) =>
  knex(dbName).insert([
    {
      title: 'Student Survey',
      prize: 'A GoPro 5',
      link: 'https://aka.ms/surveylink',
      promo: 'Take our student survey for a chance to win a GoPro 5!'
    }
  ])
