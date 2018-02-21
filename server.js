require('dotenv').config()
const { APP_INSIGHTS_KEY } = process.env

let client

if (APP_INSIGHTS_KEY) {
  const appInsights = require('applicationinsights')
  appInsights.setup(APP_INSIGHTS_KEY)
  appInsights.start()
  client = appInsights.defaultClient
} else {
  console.log('INFO: APP_INSIGHTS_KEY is not set. Using a fake app insights client')
  client = require('./src/support/devAppInsightsClient')
}

const restify = require('restify')
const socketio = require('socket.io')
const corsMiddleware = require('restify-cors-middleware')
const eventBus = require('./src/support/eventBus')
const registerRoutes = require('./src/routes')
require('./bootstrap/start')

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['API-Access-Token'],
  exposeHeaders: ['API-Access-Token-Expiry']
})

const PORT = process.env.PORT || 3000

const server = restify.createServer({
  title: 'Hanna Bot v2',
  socketio: true
})

const io = socketio.listen(server.server)
eventBus.on('inquiry-created', (data) => {
  io.emit('inquiry-created', data)
})

eventBus.on('inquiry-updated', (data) => {
  io.emit('inquiry-updated', data)
})

eventBus.on('azurecode-updated', (data) => {
  io.emit('azurecode-updated', data)
})

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

registerRoutes(server, client)

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
