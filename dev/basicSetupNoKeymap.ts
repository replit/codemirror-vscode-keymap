import { rectangularSelection, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, highlightActiveLine, dropCursor} from "@codemirror/view"
import {EditorState} from "@codemirror/state"
import {history} from "@codemirror/commands"
import {indentOnInput, foldGutter, bracketMatching, defaultHighlightStyle, syntaxHighlighting} from "@codemirror/language"
import {highlightSelectionMatches} from "@codemirror/search"
import {closeBrackets, autocompletion} from "@codemirror/autocomplete"

const basicSetup = [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  highlightActiveLine(),
  highlightSelectionMatches(),
];

export default basicSetup;