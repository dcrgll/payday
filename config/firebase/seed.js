const { faker } = require('@faker-js/faker')
const admin = require('firebase-admin')

const projectId = 'payday-b5fa1'
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
admin.initializeApp({ projectId })

const db = admin.firestore()

async function getSeedData() {
  try {
    ;[...Array(10).keys()].map(() =>
      db.collection('users').add({
        username: faker.internet.userName(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.imageUrl(),
        address: {
          addr_1: faker.address.streetAddress(),
          addr_2: faker.address.secondaryAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode()
        }
      })
    )
    // eslint-disable-next-line no-console
    console.log('database seed was successful')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error, 'database seed failed')
  }
}

getSeedData()
