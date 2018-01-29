require('dotenv').config()

module.exports = {
  client: process.env.DB_SYSTEM,
  connection: process.env.DB_CONNECTION_STRING,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations'
  },
  seeds: {
    directory: './seeds'
  }
}
