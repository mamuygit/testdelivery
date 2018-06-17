let routeController = require('./controller');
let handlerRoute = require('./../handler/handlerRouter');

console.log('APP:: REST router route init.')

exports = module.exports = function initRoute(app, pathStringModel) {
    
    app.get('/api/town', (req, res) => {
        res.json(routeController.getTown())
    })

    app.post('/api/target-town-for-match', (req, res) => {
        res.json(routeController.getTargetTownForMatch(req.body.fromTownId))
    })


    app.post('/api/match-town', (req, res) => {
        let matchTownReq = {
            fromTownId: req.body.fromTownId,
            targetTownId: req.body.targetTownId,
            costValue: req.body.costValue,

        }

        if (!routeController.validateMatchTown(matchTownReq)) {
            handlerRoute.responseError(res, 'Error.');
            return false;
        } else {
            routeController.submitMatchTown(matchTownReq, pathStringModel);
        }

        res.status(201).json(null);
    })

    app.post('/api/find-route-cost', (req, res) => {
        let findTown = {
            targetTown1: req.body.targetTown1,
            targetTown2: req.body.targetTown2,
            targetTown3: req.body.targetTown3,
            targetTown4: req.body.targetTown4
        }
        let objRouteResult = routeController.findCostRoute(findTown);
        if (objRouteResult == -1) {
            handlerRoute.responseError(res, 'No​ ​Such​ ​Route')
            return false;
        }
        res.status(200).json(objRouteResult);
    })
}