const controllers = require('../controllers')

module.exports = (app) => {
  // user routes
  app.get('/users', controllers.users.getAllUsers)
  app.get('/users/:id', controllers.users.getUser)
  app.put('/users/update/:id', controllers.users.updateUser)
  app.delete('/users/delete/:id', controllers.users.deleteUser)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('Not Found')
    res.end()
  })
}
