const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/texts.sqlite')
const bcrypt = require('bcryptjs')
const saltRounds = 10

router.post('/register', function (req, res, next) {
  console.log(req.body)
  var username = req.body.user
  var password = req.body.password

  console.log('User name = ' + username + ', password is ' + password)

  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.error(err)
    }

    db.run('INSERT INTO users (email, password) VALUES (?, ?)',
      username,
      hash, err => {
        if (err) {
          // returnera error
        }

        // returnera korrekt svar
      })

    res.status(200).end('yes')
  })
})

module.exports = router
