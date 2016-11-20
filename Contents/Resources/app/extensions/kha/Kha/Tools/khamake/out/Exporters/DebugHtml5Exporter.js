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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e487d956801b805e4798d1546772939dbfa8a924/extensions/kha/Kha/Tools/khamake/out/Exporters/DebugHtml5Exporter.js.map
