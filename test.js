const fetch = require('node-fetch')

fetch('http://me-api.henrikfredriksson.me/register',
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ user: 'henrikfredriksson2@gmail.com', password: 'pass' })
  })
  .then(function (res) { console.log(res) })
  .catch(function (res) { console.log(res) })
