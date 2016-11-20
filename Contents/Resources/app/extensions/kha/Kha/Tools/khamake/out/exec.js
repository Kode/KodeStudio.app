"use strict";
const os = require('os');
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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/06129d35b9c466fc51adeddaa91516421e38ae12/extensions/kha/Kha/Tools/khamake/out/exec.js.map
