require('dotenv').config()
const restify = require('restify')

const registerRoutes = require('./src/routes')
require('./bootstrap/start')

const PORT = process.env.PORT || 3000

const server = restify.createServer({
  title: 'Hanna Bot v2'
})

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

registerRoutes(server)

server.listen(PORT, () => console.log(`Listening on ${PORT}`))
