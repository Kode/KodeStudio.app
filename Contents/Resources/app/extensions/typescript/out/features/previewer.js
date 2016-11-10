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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3aa00786ef8c64b47835d7e70f3591813dbeb22a/extensions/typescript/out/features/previewer.js.map
