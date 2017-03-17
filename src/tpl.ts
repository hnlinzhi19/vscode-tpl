import * as vscode from 'vscode';
const _ = require('lodash');

export function tpl () {
    let editor = vscode.window.activeTextEditor;
    let doc = editor.document;
    let selection = editor.selection;
    let range = new vscode.Range(selection.start, selection.end);
    let seletedText = doc.getText(range);
    let data = eval('(' + seletedText + ')');
    let html = json2hbs(data);
    editor.edit( (ed) => {
        ed.replace(range,html);
    });
}

function json2hbs (data , key = '', parentKey = '') {
    
    let html ='';
    // console.log(_.isObject(data))
    if (_.isArray(data)) {
        console.log('array');
        html += `{{each ${parentKey ?  parentKey +'.' + key : key} as value index}} \n`;
        html += json2hbs(data[0],'value');
        console.log(data[0]);
        html += `{{/each}} \n`;
    } else if (_.isObject(data)) {
        _.forEach(data, (v, k) => {
            html += json2hbs(v, k , (parentKey ?  parentKey +'.' + key : key));
        })
    } else {
        html += `<p>{{${parentKey ? parentKey + '.' + key : key}}}</p>\n`;
    }
    return html;
}