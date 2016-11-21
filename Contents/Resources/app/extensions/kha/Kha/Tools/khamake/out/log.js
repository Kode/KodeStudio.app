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
function silent() {
    myInfo = function () { };
    myError = function () { };
}
exports.silent = silent;
function info(text) {
    myInfo(text);
}
exports.info = info;
function error(text) {
    myError(text);
}
exports.error = error;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ec6a2e2a3863b88611e4b077fcab9a568132a8d0/extensions/kha/Kha/Tools/khamake/out/log.js.map
