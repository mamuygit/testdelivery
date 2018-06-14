let routeController  = require('./route/controller');

exports = module.exports = function initRoute(app) {
    app.get('/', (req, res) => {
        console.log(routeController);
        res.json(routeController.getTown())
      })
}