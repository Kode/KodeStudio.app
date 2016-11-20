"use strict";
let myInfo = function (text) {
    console.log(text);
};
let myError = function (text) {
    console.log(text);
};
function set(log) {
    myInfo = log.info;
    myError = log.error;
}
exports.set = set;
function info(text) {
    myInfo(text);
}
exports.info = info;
function error(text) {
    myError(text);
}
exports.error = error;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/06129d35b9c466fc51adeddaa91516421e38ae12/extensions/kha/Kha/Kore/Tools/koremake/out/log.js.map
