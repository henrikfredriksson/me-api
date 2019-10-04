const fetch = require('node-fetch')

fetch('http://localhost:5000/register',
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ user: 'kalle', password: 'pass' })
  })
  .then(function (res) { console.log(res) })
  .catch(function (res) { console.log(res) })
