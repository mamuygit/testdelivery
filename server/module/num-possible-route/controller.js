let handlerTown = require('./../../module/handler/handleTown')

var exports = module.exports = {};
let totalRoute;
exports.findRouteExpectMaxFour = function (fromTown, targetTown, cb) {
    totalRoute = 0;
    let duplicate = []; 
    getTargetByTownId(duplicate, fromTown, fromTown, targetTown,  (totalNumber) => {
        cb(totalNumber);
    });
} 
function getTargetByTownId(duplicate, fromTown, flagfromTown, targetTown, cb) {
   
    let dataTownMatch = handlerTown.getDataTownMatch();
    let listTarget = dataTownMatch.filter(e => e.fromTownId == fromTown)
    listTarget.forEach((routeFrom, i) => {
        let isDup = false;
        let index = routeFrom.fromTownId + '' + routeFrom.targetTownId;
       
        if (routeFrom.targetTownId == targetTown) {
            totalRoute++;
        }
        else {
            if (duplicate.join('').indexOf(index) > -1 || flagfromTown == routeFrom.targetTownId) {
                duplicate = new Array();
                isDup = true;
            } else {
                duplicate.push(index);
            }
            if (!isDup) {
                getTargetByTownId(duplicate, routeFrom.targetTownId, flagfromTown, targetTown)
            }
        }
    }) 
    if (cb != null) {
        cb(totalRoute)
    } else {
        return false;
    }
}
