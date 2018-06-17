let dataTown = require('../../model/tower.json')
let dataTownMatch = require('../../model/match-tower-route')
var exports = module.exports = {};

exports.getDataTown = function() {
    return dataTown;
}
exports.getDataTownMatch = function () {
    return dataTownMatch;
}


//Function check match town duplicate
exports.isDuplicate = function (formId, targetId) {
    let arrDuplicate = dataTownMatch.filter((e) => 
        e.fromTownId == formId && e.targetTownId == targetId)
    return (arrDuplicate && arrDuplicate.length > 0);
}


exports.findTargetTown = function(fromTownId, targetId) {
    let townsFound = dataTownMatch.filter((e) =>
        e.fromTownId == fromTownId && e.targetTownId == targetId)
    return townsFound;
}


exports.sumCostValue = function(townFindCostRoute) {
    return townFindCostRoute.map(e => parseInt(e.costValue)).reduce(getSum)
}
function getSum(total, num) {
    return total + num;
}

exports.createObjectResponse = function(townFindCostRoute) {
    let response = [];
    townFindCostRoute.forEach(townMatch => {
        response.push({
            fromTown: mapNameWithId(townMatch.fromTownId),
            targetTown: mapNameWithId(townMatch.targetTownId),
            costValue: townMatch.costValue
        })
    });
    return response;
}
function mapNameWithId(id) {
    return dataTown.filter(e => e.id == id).map(e => e.name);
}