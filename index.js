const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const compression = require('compression')
const routes = require('./server/module/front/route')
const routeTown = require('./server/module/route-town/route')
const numberPossibleRoute = require('./server/module/num-possible-route/route')
const costCheapestRoute = require('./server/module/cost-cheapest/route')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(compression());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/dist'));
app.use(serveStatic(path.join(__dirname, 'dist'), { index: false }))
let pathString = path.join(__dirname, '/dist');
let pathStringModel = path.join(__dirname, '/server/model');

routes(app, path, pathString);
routeTown(app, pathStringModel);
numberPossibleRoute(app);
costCheapestRoute(app)

app.listen(3001, () => {
  console.log('Start server at port 3001.')
})