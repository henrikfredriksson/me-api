const express = require('express')
const router = express.Router()

router.get('/about', function (req, res) {
  const data = {
    bodytext: /* html */
      `
      <h1>Om denna sida</h1>

      <p>Denna sida är gjord i [React.js](https://reactjs.org/) och skapad med verktyget [create-react-app](https://github.com/facebook/create-react-app).</p>

      <p>Routing hanteras med hjälp av [react-router](https://github.com/ReactTraining/react-router) och
      markdown parsas till jsx med [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx).</p>
      <p>Komponenterna är skapade som [React Hooks](https://reactjs.org/docs/hooks-intro.html).</p>

      <p>Sidan är driftsatt via [now](https://zeit.co/) och Digital Ocean och är tillgänglig på domänerna</p>

      [https://henrikfredriksson.me/](https://henrikfredriksson.me) och
      [https://jsramverk.henrikfredriksson.now.sh/](https://jsramverk.henrikfredriksson.now.sh/)
      `
  }

  res.json(data)
})

module.exports = router
