const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

describe('Test the index router "/"', () => {
  test('It should response with presentation of me', async done => {
    const res = await request.get('/')

    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe('Henrik Fredriksson')
    expect(res.body.email).toBe('hefa14@student.bth.se')

    done()
  })
})

describe('Test the report routes', () => {
  test('It should give correct status code', async done => {
    const res = await request.get('/reports/week/1')

    expect(res.statusCode).toBe(200)

    done()
  })
})
