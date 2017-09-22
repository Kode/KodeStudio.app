"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Html5Exporter_1 = require("./Html5Exporter");
class NodeExporter extends Html5Exporter_1.Html5Exporter {
    constructor(options) {
        super(options);
    }
    backend() {
        return 'Node';
    }
}
exports.NodeExporter = NodeExporter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1d9d255f12f745e416dfb0fb0d2499cfea3aa37f/extensions/kha/Kha/Tools/khamake/out/Exporters/NodeExporter.js.map
