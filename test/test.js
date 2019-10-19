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
})
