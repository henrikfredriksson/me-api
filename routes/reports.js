const express = require('express')
const router = express.Router()

router.get('/reports/week/:week', function (req, res, next) {
  console.log(req.params)

  const data = {
    week: req.params.week
  }

  res.json(data)
})

module.exports = router
