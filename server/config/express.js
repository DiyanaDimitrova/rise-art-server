const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')


module.exports = (config, app) => {
  app.use(bodyParser.json({limit: '50mb'}))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, type: 'application/x-www-form-urlencoding' }))
  app.use(methodOverride('_method'))
  app.use(cors())
}
