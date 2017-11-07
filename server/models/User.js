// model of the User collection
const mongoose = require('mongoose')
const faker = require('faker')

let requiredValidationMessage = '{PATH} is required'
// shema of the user
let userSchema = mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String },
  address: {
    zipCode: { type: String },
    city: { type: String },
    streetName: { type: String },
    streetAddress: { type: String }
  },
  company: {
    name: { type: String },
  },
  avatar: { type: String },
  bio: { type: String }
})

let User = mongoose.model('User', userSchema)
//creation of User with fake data
const newUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: {
      zipCode: faker.address.zipCode(),
      city: faker.address.city(),
      streetName: faker.address.streetName(),
      streetAddress: faker.address.streetAddress(),
    },
    company: {
      name: faker.company.companyName(),
    },
    avatar: faker.image.avatar(),
    bio: faker.lorem.paragraph()
  }
}
//seed data for the users
module.exports.seedUsers = () => {
  User.find({}).then(users => {
    if (users.length === 0) {
      User.find({}).then(users => {
        if (users.length === 0) {
          const ITEMS = 20;
          for (let i = 0; i < ITEMS; i++) {
            User.create(newUser())
          }
        }
      })
    }
  })
}
