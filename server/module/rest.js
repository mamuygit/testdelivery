let routeController = require('./route/controller');
console.log('APP:: REST router init.')

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
            responseError(res, 'Error.');
            return false;
        } else {
            routeController.submitMatchTown(matchTownReq, pathStringModel);
        }

        res.status(201).json(null);
    })

    function responseError(res, msg) {
        res.status(409).send(msg);
    } 
}