const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://didi:didi@ds243805.mlab.com:43805/rise-art',
    port: 3001
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://didi:didi@ds243805.mlab.com:43805/rise-art',
    port: 8080
  }
}
