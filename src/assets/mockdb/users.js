//users.js
var faker = require('faker');

function generateUsers() {
  var users = []

  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()

    users.push({
      "id": faker.random.uuid(),
      "username": faker.name.firstName(),
      "password": faker.random.number(100000, 999999),
    })
  }

  return {
    "users": users
  }
}

module.exports = generateUsers
