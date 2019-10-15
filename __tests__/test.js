process.env.NODE_ENV = 'test'

const request = require('supertest')
const app = require('../server')

// const endpoint = 'https://me-api.henrikfredriksson.me/'

// console.log(endpoint)

describe('Test the index router "/"', () => {
  test('It should response with presentation of me', () => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.name).toBe('Henrik Fredriksson')
        expect(response.body.email).toBe('hefa14@student.bth.se')
      })
  })
})

// describe('Test the report routes', () => {
//   test('It should give correct status code', async done => {
//     const res = await request.get('/reports/week/1')

//     expect(res.statusCode).toBe(200)

//     done()
//   })
// })
