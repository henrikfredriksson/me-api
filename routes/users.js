const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
require('console.table')

/**
 * Get all users from database
 *
 * @name Get users
 * @route {GET} /users
 */
router.get('/users', (req, res, next) => {
  const db = new sqlite3.Database('./db/texts.sqlite')
  const dbPath = path.resolve(__dirname, '../db/texts.sqlite')
  db.all('SELECT email, name FROM users',
    (err, rows) => {
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
      console.log(rows)
      console.table(rows)
      return res.status(200).json(rows)
    })

  // db.close((err) => {
  //   if (err) {
  //     return console.error(err.message)
  //   }
  //   console.log('Close the database connection.')
  // })
})
module.exports = router
