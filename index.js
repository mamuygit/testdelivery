const express = require('express')
const app = express()
const routes = require('./server/module/routes.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app);

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})