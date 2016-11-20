/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var jsonContributions_1 = require('./features/jsonContributions');
var httpRequest = require('request-light');
var vscode_1 = require('vscode');
var nls = require('vscode-nls');
function activate(context) {
    nls.config({ locale: vscode_1.env.language });
    configureHttpRequest();
    vscode_1.workspace.onDidChangeConfiguration(function (e) { return configureHttpRequest(); });
    context.subscriptions.push(jsonContributions_1.addJSONProviders(httpRequest.xhr));
}
exports.activate = activate;
function configureHttpRequest() {
    var httpSettings = vscode_1.workspace.getConfiguration('http');
    httpRequest.configure(httpSettings.get('proxy'), httpSettings.get('proxyStrictSSL'));
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e487d956801b805e4798d1546772939dbfa8a924/extensions/javascript/out/javascriptMain.js.map
