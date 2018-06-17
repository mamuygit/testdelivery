
let handlerRoute = require('./../handler/handlerRouter');
let controller = require('./controller')

console.log('APP:: REST router Number of possuible route init.')

exports = module.exports = function initRoute(app, pathStringModel) {

    app.post('/api/find-number-route-maximum', (req, res) => {
        let fromTownId = req.body.fromTownId;
        let targetTownId = req.body.targetTownId;
        controller.findRouteExpectMaxFour(fromTownId, targetTownId, (totalNum) =>{
            res.status(200).json({ totalNum: totalNum})
        })
    })
}