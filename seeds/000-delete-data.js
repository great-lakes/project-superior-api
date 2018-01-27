const databases = [
  'projects_technologies',
  'mentors_skills',
  'hackathons_mentors',
  'inquiries',
  'azurecodes',
  'students',
  'hackathons',
  'projects',
  'mentors',
  'technologies',
  'skills'
]

const truncateOrder = databases.reverse()

exports.seed = (knex, Promise) => Promise.each(databases.map((dbName) => knex(dbName).del()), () => {})

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
