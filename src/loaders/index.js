const genericLoader = require('./genericLoader')

module.exports = function createLoaders () {
  return {
    hackathon: genericLoader(require('../models/Hackathon')),
    azurecode: genericLoader(require('../models/Azurecode')),
    inquiry: genericLoader(require('../models/Inquiry')),
    mentor: genericLoader(require('../models/Mentor')),
    project: genericLoader(require('../models/Project')),
    skill: genericLoader(require('../models/Skill')),
    student: genericLoader(require('../models/Student')),
    technology: genericLoader(require('../models/Technology')),
    session: genericLoader(require('../models/Session'))
  }
}
