/***
 * @Author:xiawen
 * @Date:2020-04-17 13:17:03
 * @LastModifiedBy:xiawen
 * @Last Modified time:2020-04-17 13:17:03
 */

'use strict'
import * as vscode from 'vscode'
import StyleTemplateProvider from './provider'

const REGISTER_LANGUAGE = ['vue', 'html', 'javascript', 'typescript']
const COMPLETION_TRIGGER_CHRAS = ['-']

const provider = new StyleTemplateProvider()

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    ...REGISTER_LANGUAGE.map((language) => {
      return vscode.languages.registerCompletionItemProvider(
        {
          scheme: 'file',
          language,
        },
        provider,
        ...COMPLETION_TRIGGER_CHRAS
      )
    })
  )
}
