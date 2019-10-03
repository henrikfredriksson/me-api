const bcrypt = require('bcryptjs')
const saltRounds = 10
const myPlaintextPassword = 'longandhardP4$$w0rD'

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/texts.sqlite')

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  if (err) {
    console.error(err)
  }

  db.run('INSERT INTO users (email, password) VALUES (?, ?)',
    'user121@example.com',
    hash, (err) => {
      if (err) {
        //
      }

      // returnera korrekt svar
    })

  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) {
      console.error(err)
    }

    console.log(res)
  })
})
