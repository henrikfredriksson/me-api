const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/texts.sqlite')

router.post('/register', function (req, res, next) {
  console.log(req.body)
  var username = req.body.user
  var password = req.body.password
  console.log('User name = ' + username + ', password is ' + password)

  db.run('INSERT INTO users (email, password) VALUES (?, ?)',
    username,
    password, err => {
      if (err) {
        // returnera error
      }

      // returnera korrekt svar
    })

  res.status(200).end('yes')
})

module.exports = router

// fetch(url, {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
//   mode: 'cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     'Content-Type': 'application/json'
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
