const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()

const bcrypt = require('bcryptjs')
const saltRounds = 10

router.post('/register', async (req, res, next) => {
  const db = new sqlite3.Database('./db/texts.sqlite')
  const username = req.body.user
  const password = req.body.password
  const name = req.body.name
  const birthday = req.body.birthday

  const hashedPassword = await bcrypt.hash(password, saltRounds)
    .catch(err => console.error(err))

  db.run(
    'INSERT INTO users(email, password, name, birthday) VALUES(?, ?,?,?)',
    [username, hashedPassword, name, birthday],
    err => {
      if (err) {
        console.error(err)
        return res.status(500).json({
          errors: {
            status: 500,
            source: '/register',
            title: 'Database error',
            detail: err.message
          }
        })
      }
      return res.status(200).json({
        data: {
          status: 200,
          source: '/register',
          message: 'User successfully registered.'
        }
      })
    })

  db.close((err) => {
    if (err) {
      return console.error(err.message)
    }
    console.log('Close the database connection.')
  })
})
module.exports = router
