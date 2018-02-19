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
var socketio = require('socket.io')
const eventBus = require('./src/support/eventBus')
const registerRoutes = require('./src/routes')
require('./bootstrap/start')

const PORT = process.env.PORT || 3000

const server = restify.createServer({
  title: 'Hanna Bot v2',
  socketio: true
})

const io = socketio.listen(server.server)

io.on('connection', (socket) => {
  eventBus.on('inquiry-created', () => {
    socket.emit('inquiry-created')
  })
  eventBus.on('inquiry-updated', () => {
    socket.emit('inquiry-updated')
  })
})

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

registerRoutes(server, client)

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
