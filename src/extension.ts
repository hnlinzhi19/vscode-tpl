'use strict';
import * as vscode from 'vscode';
import {tpl, cssImg} from './tpl';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-tpl" is now active!');
    let disposable = vscode.commands.registerCommand('linz.tpl', tpl);
    let css = vscode.commands.registerCommand('linz.cssImg', cssImg);

    context.subscriptions.push(disposable);
    context.subscriptions.push(css);
}

// this method is called when your extension is deactivated
export function deactivate() {
}