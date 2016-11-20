/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
function plain(parts) {
    if (!parts) {
        return '';
    }
    return parts.map(function (part) { return part.text; }).join('');
}
exports.plain = plain;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/06129d35b9c466fc51adeddaa91516421e38ae12/extensions/typescript/out/features/previewer.js.map
