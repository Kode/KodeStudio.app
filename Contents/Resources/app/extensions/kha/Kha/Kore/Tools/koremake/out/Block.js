"use strict";
const fs = require('fs');
class Block {
    constructor(out, indentation) {
        this.out = out;
        this.indentation = indentation;
    }
    indent() {
        ++this.indentation;
    }
    unindent() {
        --this.indentation;
    }
    tag(name, value) {
        this.p('<' + name + '>' + value + '</' + name + '>');
    }
    tagStart(name) {
        this.p('<' + name + '>');
        this.indent();
    }
    tagEnd(name) {
        this.unindent();
        this.p('</' + name + '>');
    }
    p(line) {
        if (line === undefined)
            line = '';
        let tabs = '';
        for (let i = 0; i < this.indentation; ++i)
            tabs += '\t';
        let data = new Buffer(tabs + line + '\n');
        fs.writeSync(this.out, data, 0, data.length, null);
    }
}
exports.Block = Block;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/06129d35b9c466fc51adeddaa91516421e38ae12/extensions/kha/Kha/Kore/Tools/koremake/out/Block.js.map
