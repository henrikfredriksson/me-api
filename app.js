const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const index = require('./routes/index')
const reports = require('./routes/reports')
const register = require('./routes/register')

app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
  // use morgan to log at command line
  app.use(morgan('combined')) // 'combined' outputs the Apache style LOGs
}

app.use('/', index)
app.use(reports)

app.use(register)

// Testing routes with method
app.get('/user', (req, res) => {
  res.json({
    data: {
      msg: 'Got a GET request'
    }
  })
})

// app.post('/user', (req, res) => {
//   res.json({
//     data: {
//       msg: 'Got a POST request'
//     }
//   })
// })

// app.put('/user', (req, res) => {
//   res.json({
//     data: {
//       msg: 'Got a PUT request'
//     }
//   })
// })

// app.delete('/user', (req, res) => {
//   res.json({
//     data: {
//       msg: 'Got a DELETE request'
//     }
//   })
// })

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  res.status(err.status || 500).json({
    errors: [
      {
        status: err.status,
        title: err.message,
        detail: err.message
      }
    ]
  })
})

module.exports = app
