
const fetch = require('node-fetch')

// const endpoint = 'https://me-api.henrikfredriksson.me/'
const endpoint = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/' : 'https://me-api.henrikfredriksson.me/'

console.log(endpoint)

describe('Test the index router "/"', () => {
  test('It should response with presentation of me', async () => {
    const response = await fetch(endpoint)
    const data = await response.json()

    // expect(res.statusCode).toBe(200)
    expect(data.name).toBe('Henrik Fredriksson')
    expect(data.email).toBe('hefa14@student.bth.se')
  })
})

// describe('Test the report routes', () => {
//   test('It should give correct status code', async done => {
//     const res = await request.get('/reports/week/1')

//     expect(res.statusCode).toBe(200)

//     done()
//   })
// })
