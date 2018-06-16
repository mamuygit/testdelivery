let dataTownMatch = require('../../model/match-tower-route')
var exports = module.exports = {};


//Function check match town duplicate
exports.isDuplicate = function (formId, targetId) {
    let arrDuplicate = dataTownMatch.filter((e) => 
                            e.idFrom == formId && e.idTarget == targetId)
    console.log((arrDuplicate && arrDuplicate.legnth > 0), formId, targetId);
    return (arrDuplicate && arrDuplicate.legnth > 0);
}
