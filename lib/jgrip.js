'use babel';

import JgripView from './view';
import { CompositeDisposable } from 'atom'; // eslint-disable-line
import createTestFile from './utils/testFile';

export default {

  jgripView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.jgripView = new JgripView(state.jgripViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.jgripView.getElement(),
      visible: false,
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'jgrip:toggle': () => this.toggle(),
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.jgripView.destroy();
  },

  serialize() {
    return {
      jgripViewState: null,
    };
  },

  toggle() {
    const editor = atom.workspace.getActiveTextEditor();
    const src = editor.getBuffer().getPath();

    console.log(src);

    // show modalPannel
    this.modalPanel.show();

    if (editor) {
      createTestFile(src, () => (this.modalPanel.isVisible() ? this.modalPanel.hide() : this.modalPanel.show())); // eslint-disable-line
    }
  },

};