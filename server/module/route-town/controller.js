let handlerTown = require('./../../module/handler/handleTown')
var jsonfile = require('jsonfile')

var exports = module.exports = {};
exports.getTown = function () {
    return handlerTown.getDataTown();
}

exports.getTargetTownForMatch = function (fromTownId) {
    return handlerTown.getDataTown();
}

exports.validateMatchTown = function (matchTownReq) {
    if (!matchTownReq) {
        return false;
    }
    //Validate Check
    //Duplciate
    if (handlerTown.isDuplicate(matchTownReq.fromTownId, matchTownReq.targetTownId)) {
        return false;
    }
    //NotFound

    //
    return true;
}
exports.submitMatchTown = function (matchTownReq, pathStringModel) {
    let dataTownMatch = handlerTown.getDataTownMatch();
    dataTownMatch.push(matchTownReq)
    jsonfile.writeFileSync(`${pathStringModel}/match-tower-route.json`, 
        dataTownMatch, 
        { spaces: 2, EOL: '\r\n' }
    )
}

exports.findCostRoute = function(objFindReq) {
    if (!objFindReq.targetTown1 && 
        !objFindReq.targetTown2) {
            return -1;
        }
    //Pick Town Target 1, 2 find cost step one
    let townFindCostRoute = handlerTown.findTargetTown(objFindReq.targetTown1, objFindReq.targetTown2)
    //Not found
    if (!townFindCostRoute || townFindCostRoute.length === 0) {
        return -1;
    }
    
    //Pick Town Target 2, 3 find cost value step two
    if (objFindReq.targetTown3) {
        let  result = handlerTown.findTargetTown(objFindReq.targetTown2, objFindReq.targetTown3)
        //Not found
        if (!result || result.length === 0) {
            return -1;
        }
        //Merge 2 Array Object
        Array.prototype.push.apply(townFindCostRoute, result);
    }

    //Pick Town Target 3, 4 find cost value step two
    if (objFindReq.targetTown4 ) {
        let result = handlerTown.findTargetTown(objFindReq.targetTown3, objFindReq.targetTown4)
        //Not found
        if (!result || result.length === 0) {
            return -1;
        }
        //Merge 2 Array Object
        Array.prototype.push.apply(townFindCostRoute, result);
    }
    let response = handlerTown.createObjectResponse(townFindCostRoute);
    let totalCost = handlerTown.sumCostValue(response);
    return { findRoutes: response, totalCost: totalCost};
}
