let dataTown = require('../../model/tower.json')
let dataTownMatch = require('../../model/match-tower-route')
let handlerTown = require('./../../module/handler/handleTown')
var jsonfile = require('jsonfile')

var exports = module.exports = {};
exports.getTown = function () {
    return dataTown;
}

exports.getTargetTownForMatch = function (fromTownId) {
    return dataTown;
}

exports.validateMatchTown = function (matchTownReq) {
    if (!matchTownReq) {
        return false;
    }
    //Validate Check
    //Duplciate
    if (checkDuplicateMatch(matchTownReq.fromTownId, matchTownReq.targetTownId)) {
        return false;
    }
    //NotFound

    //
    return true;
}
exports.submitMatchTown = function (matchTownReq, pathStringModel) {
    dataTownMatch.push(matchTownReq);
    jsonfile.writeFileSync(`${pathStringModel}/match-tower-route.json`, 
        dataTownMatch, 
        { spaces: 2, EOL: '\r\n' }
    )
}

function checkDuplicateMatch(formId, targetId) {
    return handlerTown.isDuplicate(formId, targetId)
}