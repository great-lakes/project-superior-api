const fs = require('fs')

// register all the models
const modelFiles = fs.readdirSync('./src/models')
modelFiles.forEach((file) => {
  require('../src/models/' + file)
})
