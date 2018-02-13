require('dotenv').config()
const { APP_INSIGHTS_KEY } = process.env

// if (APP_INSIGHTS_KEY) {
const appInsights = require('applicationinsights')
appInsights.setup(APP_INSIGHTS_KEY)
appInsights.start()
const client = appInsights.defaultClient
// }

const restify = require('restify')

const registerRoutes = require('./src/routes')
require('./bootstrap/start')

const PORT = process.env.PORT || 3000

const server = restify.createServer({
  title: 'Hanna Bot v2'
})

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

registerRoutes(server, client)

server.listen(PORT, () => console.log(`Listening on ${PORT}`))
