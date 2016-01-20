/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
define(["require", "exports", 'vs/editor/browser/standalone/colorizer', 'vs/editor/browser/standalone/standaloneCodeEditor', 'vs/editor/common/editorCommon', 'vs/editor/browser/editorBrowser', 'vs/editor/standalone-languages/all', './standaloneSchemas'], function (require, exports, Colorizer, standaloneCodeEditor, EditorCommon, EditorBrowser) {
    var global = self;
    if (!global.Monaco) {
        global.Monaco = {};
    }
    var Monaco = global.Monaco;
    if (!Monaco.Editor) {
        Monaco.Editor = {};
    }
    Monaco.Editor.setupServices = standaloneCodeEditor.setupServices;
    Monaco.Editor.getAPI = standaloneCodeEditor.getAPI;
    Monaco.Editor.create = standaloneCodeEditor.create;
    Monaco.Editor.createModel = standaloneCodeEditor.createModel;
    Monaco.Editor.createDiffEditor = standaloneCodeEditor.createDiffEditor;
    Monaco.Editor.configureMode = standaloneCodeEditor.configureMode;
    Monaco.Editor.registerWorkerParticipant = standaloneCodeEditor.registerWorkerParticipant;
    Monaco.Editor.getOrCreateMode = standaloneCodeEditor.getOrCreateMode;
    Monaco.Editor.createCustomMode = standaloneCodeEditor.createCustomMode;
    Monaco.Editor.colorize = standaloneCodeEditor.colorize;
    Monaco.Editor.colorizeElement = standaloneCodeEditor.colorizeElement;
    Monaco.Editor.colorizeLine = Colorizer.colorizeLine;
    Monaco.Editor.colorizeModelLine = Colorizer.colorizeModelLine;
    // -- export common constants
    Monaco.Editor.SelectionDirection = EditorCommon.SelectionDirection;
    Monaco.Editor.WrappingIndent = EditorCommon.WrappingIndent;
    Monaco.Editor.wrappingIndentFromString = EditorCommon.wrappingIndentFromString;
    Monaco.Editor.OverviewRulerLane = EditorCommon.OverviewRulerLane;
    Monaco.Editor.EndOfLinePreference = EditorCommon.EndOfLinePreference;
    Monaco.Editor.EndOfLineSequence = EditorCommon.EndOfLineSequence;
    Monaco.Editor.LineTokensBinaryEncoding = EditorCommon.LineTokensBinaryEncoding;
    Monaco.Editor.TrackedRangeStickiness = EditorCommon.TrackedRangeStickiness;
    Monaco.Editor.VerticalRevealType = EditorCommon.VerticalRevealType;
    Monaco.Editor.MouseTargetType = EditorCommon.MouseTargetType;
    Monaco.Editor.KEYBINDING_CONTEXT_EDITOR_TEXT_FOCUS = EditorCommon.KEYBINDING_CONTEXT_EDITOR_TEXT_FOCUS;
    Monaco.Editor.KEYBINDING_CONTEXT_EDITOR_FOCUS = EditorCommon.KEYBINDING_CONTEXT_EDITOR_FOCUS;
    Monaco.Editor.KEYBINDING_CONTEXT_EDITOR_TAB_MOVES_FOCUS = EditorCommon.KEYBINDING_CONTEXT_EDITOR_TAB_MOVES_FOCUS;
    Monaco.Editor.KEYBINDING_CONTEXT_EDITOR_HAS_MULTIPLE_SELECTIONS = EditorCommon.KEYBINDING_CONTEXT_EDITOR_HAS_MULTIPLE_SELECTIONS;
    Monaco.Editor.KEYBINDING_CONTEXT_EDITOR_HAS_NON_EMPTY_SELECTION = EditorCommon.KEYBINDING_CONTEXT_EDITOR_HAS_NON_EMPTY_SELECTION;
    Monaco.Editor.KEYBINDING_CONTEXT_EDITOR_LANGUAGE_ID = EditorCommon.KEYBINDING_CONTEXT_EDITOR_LANGUAGE_ID;
    Monaco.Editor.ViewEventNames = EditorCommon.ViewEventNames;
    Monaco.Editor.CodeEditorStateFlag = EditorCommon.CodeEditorStateFlag;
    Monaco.Editor.EditorType = EditorCommon.EditorType;
    Monaco.Editor.ClassName = EditorCommon.ClassName;
    Monaco.Editor.EventType = EditorCommon.EventType;
    Monaco.Editor.Handler = EditorCommon.Handler;
    // -- export browser constants
    Monaco.Editor.ClassNames = EditorBrowser.ClassNames;
    Monaco.Editor.ContentWidgetPositionPreference = EditorBrowser.ContentWidgetPositionPreference;
    Monaco.Editor.OverlayWidgetPositionPreference = EditorBrowser.OverlayWidgetPositionPreference;
    // Register all built-in standalone languages
    var MonacoEditorLanguages = this.MonacoEditorLanguages || [];
    MonacoEditorLanguages.forEach(function (language) {
        standaloneCodeEditor.registerStandaloneLanguage(language, language.defModule);
    });
    // Register all built-in standalone JSON schemas
    var MonacoEditorSchemas = this.MonacoEditorSchemas || {};
    for (var uri in MonacoEditorSchemas) {
        standaloneCodeEditor.registerStandaloneSchema(uri, MonacoEditorSchemas[uri]);
    }
    ;
});
//# sourceMappingURL=standaloneEditor.js.map