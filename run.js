const app = require('./app')
const port = process.env.PORT || 5000

// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`))
