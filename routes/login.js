const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/login', (req, res, next) => {
  const db = new sqlite3.Database('./db/texts.sqlite')

  const username = req.body.user
  const password = req.body.password

  db.get('SELECT * FROM users WHERE email = ? LIMIT 1',
    username, async (err, rows) => {
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

      const user = rows

      if (user === undefined) {
        return res.status(401).json({
          errors: {
            status: 401,
            source: '/login',
            title: 'User not found',
            detail: 'User with provided email not found.'
          }
        })
      }

      const passwordMatch = await bcrypt.compare(password, user.password)
        .catch(err => {
          console.error(err)
        })

      if (passwordMatch) {
        const payload = { email: username }
        const secret = process.env.JWT_SECRET

        const token = jwt.sign(payload, secret, { expiresIn: '1h' })

        return res.status(200).json({
          data: {
            status: 200,
            message: 'Login successful',
            user: user,
            token: token
          }
        })
      }
      return res.status(401).json({
        data: {
          status: 401,
          message: 'Password incorrect'
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
