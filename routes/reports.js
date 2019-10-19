const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
require('dotenv').config()

/**
  Route to create data post
*/
router.post('/reports',
  (req, res, next) => checkToken(req, res, next),
  (req, res) => {
    const dbPath = path.resolve(__dirname, '../db/texts.sqlite')
    const db = new sqlite3.Database(dbPath)

    const week = req.body.week
    const bodytext = req.body.bodytext


    db.run(
      'INSERT INTO reports(week, bodytext) VALUES(?,?)',
      week, bodytext,
      (err, rows) => {
        if (err) {
          return res.status(500).json({
            errors: {
              status: 500,
              source: '/reports',
              title: 'Database error',
              detail: err.message
            }
          })
        }
        return res.status(200).json({
          data: {
            status: 200,
            message: 'Added data successfully',
            week: week
          }
        })
      })

    db.close((err) => {
      if (err) {
        return console.error(err.message)
      }
      console.log('Close the database connection.')
    })
  }
)

/**
 * Check JWT-token
 */
const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token']

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
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

/**
 *  Retrieve all reports
 */
router.get('/reports/', (req, res, next) => {
  const dbPath = path.resolve(__dirname, '../db/texts.sqlite')
  const db = new sqlite3.Database(dbPath)

  db.all('SELECT * FROM reports',
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          errors: {
            status: 500,
            source: '/reports',
            title: 'Database error',
            detail: err.message
          }
        })
      }

      return res.status(200).json(rows)
    })

  db.close((err) => {
    if (err) {
      return console.error(err.message)
    }
    console.log('Close the database connection.')
  })
})

/**
 *  Retrieve specific reports
 */
router.get('/reports/week/:week', (req, res, next) => {
  const dbPath = path.resolve(__dirname, '../db/texts.sqlite')
  const db = new sqlite3.Database(dbPath)

  const week = req.params.week

  db.get('SELECT * FROM reports WHERE week = ?',
    week, (err, rows) => {
      if (err) {
        return res.status(500).json({
          errors: {
            status: 500,
            source: '/reports',
            title: 'Database error',
            detail: err.message
          }
        })
      }
      return res.status(200).json(rows)
    })

  db.close((err) => {
    if (err) {
      return console.error(err.message)
    }
    console.log('Close the database connection.')
  })
})

/**
 *  Edit specific reports
 */
router.put('/reports/week/:week',
  (req, res, next) => checkToken(req, res, next),
  (req, res) => {
    const dbPath = path.resolve(__dirname, '../db/texts.sqlite')
    const db = new sqlite3.Database(dbPath)

    const week = req.body.week
    const bodytext = req.body.bodytext

    db.run('UPDATE reports SET bodytext = ? WHERE week = ?',
      bodytext, week, (err, rows) => {
        if (err) {
          return res.status(500).json({
            errors: {
              status: 500,
              source: '/reports',
              title: 'Database error',
              detail: err.message
            }
          })
        }
        return res.status(200).json(rows)
      })

    db.close((err) => {
      if (err) {
        return console.error(err.message)
      }
      console.log('Close the database connection.')
    })
  })

module.exports = router
