// controller about users
let User = require('mongoose').model('User')

module.exports = {
  // retrieve all users
  getAllUsers: (req, res) => {
    User
      .find()
      .then(users => {
        res.json({ users: users })
      })
      .catch(err => {
        res.json({ message: err })
      })
  },
  // retrieve user by id
  getUser: (req, res) => {
    User
      .findById(req.params.id)
      .then((user) => {
        res.json({ user: user })
      })
      .catch((err) => {
        res.json({ message: err })
      })
  },
  // update name of the user
  updateUser: (req, res) => {
    let name = req.body.name
    User
      .findByIdAndUpdate(req.params.id, {
        $set: { name: name }
      })
      .exec()
      .then(() => {
        res.json({ message: 'User is updated' })
      })
      .catch((err) => {
        res.json({ message: 'User could not be updated' })
      })
  },
  // delete user
  deleteUser: (req, res) => {
    User
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({ message: 'User is deleted' })
      })
      .catch((err) => {
        res.json({ message: 'User could not be updated' })
      })
  }
}
