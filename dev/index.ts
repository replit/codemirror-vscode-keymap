import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript'
import { vscodeKeymap } from "../src/"
import basicSetup from './basicSetupNoKeymap'

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
    extensions: [basicSetup, keymap.of(vscodeKeymap), javascript()],
  }),
  parent: document.querySelector('#editor'),
});
