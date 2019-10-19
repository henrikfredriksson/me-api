process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server.js')

chai.should()

chai.use(chaiHttp)

describe('Routes', () => {
  describe('GET /', () => {
    it('200 HAPPY PATH', (done) => {
      chai.request(app)
        .get('/')
        .end((err, response) => {
          if (err) {
            throw err
          }
          response.statusCode.should.be.equal(200)
          response.body.should.be.an('object')
          done()
        })
    })
  })

  describe('GET /users', () => {
    it('200 HAPPY PATH', (done) => {
      chai.request(app)
        .get('/users')
        .end((err, response) => {
          if (err) {
            throw err
          }
          response.statusCode.should.be.equal(200)
          response.body.should.be.an('array')
          done()
        })
    })
  })

  // describe('GET /reports/kmom02', () => {
  //   it('200 HAPPY PATH', (done) => {
  //     chai.request(server)
  //       .get('/reports/kmom02')
  //       .end((err, res) => {
  //         res.should.have.status(200)
  //         res.body.should.be.an('object')
  //         res.body.data.should.be.an('array')
  //         res.body.data.length.should.be.above(0)

  //         done()
  //       })
  //   })
  // })
})
