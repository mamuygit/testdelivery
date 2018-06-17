let handlerTown = require('./../../module/handler/handleTown')

exports = module.exports = {};
exports.findCostCheapestRoute = function (fromTownId, targetTownId, cb) {
    let costSums = [];
    getTargetByTownId(null, null, costSums, fromTownId, targetTownId, (totalCostSum) => {
        cb(totalCostSum);
    });
}

function getTargetByTownId(duplicated, isRecursive, costSums, fromTown, targetTown, cb, costSum) {

    let dataTownMatch = handlerTown.getDataTownMatch();
    let listTarget = dataTownMatch.filter(e => e.fromTownId == fromTown)
    listTarget.forEach((routeFrom, i) => {
        let isDup = false;
        let index = routeFrom.fromTownId + '' + routeFrom.targetTownId;
        let duplicate = (isRecursive) ? duplicated : [];
        costSum = (costSum != null || costSum != undefined) ? costSum + parseInt(routeFrom.costValue) : parseInt(routeFrom.costValue);
        console.log(i, isRecursive, duplicate);
        if (routeFrom.targetTownId == targetTown) {
            console.log(duplicate, targetTown, costSum);
            costSums.push(costSum);
        }
        else {
            if (duplicate.join('').indexOf(index) > -1) {
                costSum = 0;
                duplicate = new Array();
                isDup = true;
            } else {
                duplicate.push(index);
            }
            if (!isDup) {
                getTargetByTownId(duplicate, true, costSums, routeFrom.targetTownId, targetTown, null, costSum)
            }
        }
    })
    if (cb != null) {
        cb(costSums)
    } else {
        return false;
    }
}

