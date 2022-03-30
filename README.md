# CodeMirror VSCode Keymap

<span><a href="https://replit.com/@util/CodeMirror-VSCode-Keymap" title="Run on Replit badge"><img src="https://replit.com/badge/github/replit/codemirror-indentation-markers" alt="Run on Replit badge" /></a></span>
<span><a href="https://www.npmjs.com/package/@replit/codemirror-vscode-keymap" title="NPM version badge"><img src="https://img.shields.io/npm/v/@replit/codemirror-vscode-keymap?color=blue" alt="NPM version badge" /></a></span>

Ports VSCode's keyboard shortcuts to CodeMirror 6.

This keymap includes shortcuts for all the official extension and replaces codemirror default keymaps:
- autocomplete (make sure to set `defaultKeymap: false` when enabling this plugin)
- closebrackets
- commands
- comment
- fold
- history
- lint
- search

The keymap is based on the following:
- [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

### Usage
```ts
import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeKeymap } from "@replit/codemirror-vscode-keymap";

const doc = `
function wow() {
  function hello() {
    console.log({
      lol: 1
    })
  }
}
`

new EditorView({
  state: EditorState.create({
    doc,
    extensions: [keymap.of(vscodeKeymap), javascript()],
  }),
  parent: document.querySelector('#editor'),
});
```

### Missing features
- Scroll Line Down	Ctrl+Down
- Scroll Line Up	Ctrl+Up
- Scroll Page Down	Alt+PageDown
- Scroll Page Up	Alt+PageUp

