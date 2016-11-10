"use strict";
const Html5Exporter_1 = require('./Html5Exporter');
class DebugHtml5Exporter extends Html5Exporter_1.Html5Exporter {
    constructor(options) {
        super(options);
    }
    sysdir() {
        return 'debug-html5';
    }
}
exports.DebugHtml5Exporter = DebugHtml5Exporter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3aa00786ef8c64b47835d7e70f3591813dbeb22a/extensions/kha/Kha/Tools/khamake/out/Exporters/DebugHtml5Exporter.js.map
