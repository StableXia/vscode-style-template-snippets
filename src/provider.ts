/***
 * @Author:xiawen
 * @Date:2020-04-17 13:17:05
 * @LastModifiedBy:xiawen
 * @Last Modified time:2020-04-17 13:17:05
 */

import * as vscode from 'vscode'
import { SNIPPET_MAP, IfaSnippetItem, IfaSnippet } from './snippets.const'

interface IfaMatchData {
  snippets: IfaSnippet
  match: RegExpMatchArray
}

const CLASS_START_MATCH_REGX = /^\s|\"|\'/
const CLASS_MATCH_REGX = /\sdf\-$|\"df\-$|\'df\-$/
const CLASS_LAYOUT_MATCH_REGX = /\sdf\-layout\-$|\"df\-layout\-$|\'df\-layout\-$/
const CLASS_SHADOW_MATCH_REGX = /\sdf\-shadow\-$|\"df\-shadow\-$|\'df\-shadow\-$/

function getMatchData(text: string) {
  if (CLASS_MATCH_REGX.test(text)) {
    return {
      snippets: SNIPPET_MAP.all,
      match: text.match(CLASS_MATCH_REGX),
    }
  }

  if (CLASS_LAYOUT_MATCH_REGX.test(text)) {
    return {
      snippets: SNIPPET_MAP.layout,
      match: text.match(CLASS_LAYOUT_MATCH_REGX),
    }
  }

  if (CLASS_SHADOW_MATCH_REGX.test(text)) {
    return {
      snippets: SNIPPET_MAP.shadow,
      match: text.match(CLASS_SHADOW_MATCH_REGX),
    }
  }

  return undefined
}

class StyleTemplateProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): Thenable<vscode.CompletionItem[]> {
    const start: vscode.Position = new vscode.Position(position.line, 0)
    const range: vscode.Range = new vscode.Range(start, position)
    const text: string = document.getText(range)

    return new Promise((resolve, reject) => {
      const matchData = getMatchData(text)

      if (!matchData) {
        resolve()
      }

      const { snippets, match } = matchData as IfaMatchData
      const matchStr = (match ? match[0] : '').replace(
        CLASS_START_MATCH_REGX,
        ''
      )

      const layoutSnippets = snippets.map((v: IfaSnippetItem) => {
        const temp = new vscode.CompletionItem(
          v.body,
          vscode.CompletionItemKind.Variable
        )
        temp.detail = v.description
        temp.insertText = v.body.replace(matchStr, '')
        return temp
      })

      resolve(layoutSnippets)
    })
  }
}

export default StyleTemplateProvider
