'use strict';
import * as vscode from 'vscode';
import {tpl} from './tpl';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-tpl" is now active!');
    let disposable = vscode.commands.registerCommand('linz.tpl', tpl);

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}