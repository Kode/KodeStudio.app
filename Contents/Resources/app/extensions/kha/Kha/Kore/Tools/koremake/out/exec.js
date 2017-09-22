"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
function sys() {
    if (os.platform() === 'linux') {
        if (os.arch() === 'arm')
            return '-linuxarm';
        else if (os.arch() === 'x64')
            return '-linux64';
        else
            return '-linux32';
    }
    else if (os.platform() === 'win32') {
        return '.exe';
    }
    else {
        return '-osx';
    }
}
exports.sys = sys;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1d9d255f12f745e416dfb0fb0d2499cfea3aa37f/extensions/kha/Kha/Kore/Tools/koremake/out/exec.js.map
