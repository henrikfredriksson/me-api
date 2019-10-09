const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/reports',
  (req, res, next) => checkToken(req, res, next),
  // (req, res) => reports.addReport(res, req.body));
  (req, res) => {
    return res.json({
      message: 'Hwllo'
    })
  }
)

function checkToken(req, res, next) {
  const token = req.headers['x-access-token']

  console.log(token)
  // console.log(process.env.JWT_SECRET)

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(500).json({
        errors: {
          status: 500,
          source: '/login',
          title: 'Database error',
          detail: err.message
        }
      })
    }

    next()
  })
}

// function checkToken(req, res, next) {
//   const token = req.headers['x-access-token'];

//   jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
//     if (err) {
//       // send error response
//     }

//     // Valid token send on the request
//     next();
//   });
// }

// router.post('/reports',
//   (req, res, next) => checkToken(req, res, next),
//   (req, res) => reports.addReport(res, req.body))

// function checkToken (req, res, next) {
//   const token = req.headers['x-access-token']

//   jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
//     if (err) {
//       // send error response
//     }

//     // Valid token send on the request
//     next()
//   })
// }

router.get('/reports/week/:week', (req, res, next) => {
  console.log(req.params)

  const data = {
    week: req.params.week
  }

  res.json(data)
})

module.exports = router
