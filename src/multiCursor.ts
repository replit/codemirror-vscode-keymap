import { Command, EditorView } from '@codemirror/view';
import { EditorSelection } from '@codemirror/state';

const createAddCursor =
  (direction: 'up' | 'down'): Command =>
  (view) => {
    const forward = direction === 'down';

    const selection = view.state.selection;

    for (const r of selection.ranges) {
      selection.addRange(view.moveVertically(r, forward));
    }

    view.dispatch({ selection });

    return true;
  };

export const addCursorUp = createAddCursor('up');
export const addCursorDown = createAddCursor('down');
