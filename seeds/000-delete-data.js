const databases = [
  'projects_technologies',
  'mentors_skills',
  'hackathons_mentors',
  'hackathons_technologies',
  'hackathons_surveys',
  'inquiries',
  'azurecodes',
  'surveyanswers',
  'surveysubmissions',
  'surveychoices',
  'surveyquestions',
  'students',
  'surveys',
  'hackathons',
  'projects',
  'sessions',
  'mentors',
  'technologies',
  'skills'
]

const truncateOrder = databases.reverse()

exports.seed = (knex, Promise) => Promise.each(databases.map((dbName) => knex(dbName).del()), () => {})
.then(() => console.log('everything is deleted'))
.then(() => Promise.all(truncateOrder.map(dbName => {
  const seqName = `${dbName}_id_seq`
  const sql = `
  ALTER SEQUENCE ${seqName} RESTART WITH 1;
  UPDATE ${dbName} SET id=nextval('${seqName}');
  `
  // console.log(sql)
  return knex.schema.raw(sql)
    .catch(() => {
      console.log(`${dbName} does not have auto_increment id`)
    })
})))
.then(() => console.log('everything is truncated'))
