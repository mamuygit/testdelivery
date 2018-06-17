
let controller = require('./controller')
console.log('APP:: REST router Route cost cheapest init.')

exports = module.exports = function initRoute(app) {

    app.post('/api/find-route-cheapest', (req, res) => {
        let fromTownId = req.body.fromTownId;
        let targetTownId = req.body.targetTownId;
        controller.findCostCheapestRoute(fromTownId, targetTownId, (costSums) => {
            res.status(200).json({ totalNum: costSums })
        })
        // controller.findRouteExpectMaxFour(fromTownId, targetTownId, (totalNum) => {
        //     res.status(200).json({ totalNum: totalNum })
        // })
    })
}