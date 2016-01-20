/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
define(["require", "exports", 'vs/platform/instantiation/common/instantiation'], function (require, exports, instantiation_1) {
    exports.IExecutionService = instantiation_1.createDecorator('executionService');
    exports.ITerminalService = instantiation_1.createDecorator('nativeTerminalService');
});
//# sourceMappingURL=execution.js.map