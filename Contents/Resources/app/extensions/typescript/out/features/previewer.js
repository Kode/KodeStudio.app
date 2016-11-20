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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e487d956801b805e4798d1546772939dbfa8a924/extensions/typescript/out/features/previewer.js.map
