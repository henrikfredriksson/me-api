const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/texts.sqlite')

db.run('INSERT INTO users (email, password) VALUES (?, ?)',
  'user@example.com',
  'superlonghashedpasswordthatwewillseehowtohashinthenextsection', err => {
    if (err) {
      // returnera error
    }

    // returnera korrekt svar
  })

// db.run('DELETE FROM users WHERE email="user@example.com"', err => {
//   if (err) {
//     // returnera error
//   }

//   // returnera korrekt svar
// })
