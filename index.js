//index file of the project
const express = require('express')
let app = express()

let env = process.env.NODE_ENV || 'development'
let config = require('./server/config/config')[env]

require('./server/config/database')(config)
require('./server/config/express')(config, app)
require('./server/config/routes')(app)

app.listen(config.port)
console.log('Express ready!')
