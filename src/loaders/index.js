const genericLoader = require('../loaders/genericLoader')

exports.hackathon = genericLoader(require('../models/Hackathon'))
exports.project = genericLoader(require('../models/Project'))
exports.azurecode = genericLoader(require('../models/Azurecode'))
exports.inquiry = genericLoader(require('../models/Inquiry'))
exports.mentor = genericLoader(require('../models/Mentor'))
exports.project = genericLoader(require('../models/Project'))
exports.skill = genericLoader(require('../models/Skill'))
exports.student = genericLoader(require('../models/Student'))
exports.technology = genericLoader(require('../models/Technology'))
