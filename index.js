const express = require('express')
const app = express()
const routes = require('./server/module/routes.js')


routes(app);

  app.listen(3000, () => {
    console.log('Start server at port 3000.')
  })