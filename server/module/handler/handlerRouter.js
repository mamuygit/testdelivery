exports = module.exports = {};
exports.responseError = function (res, msg) {
    res.status(409).send(msg);
} 