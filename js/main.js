const editors = [];

const refreshEditors = () => {
  editors.forEach(editor => {
    editor.layout();
  });
}

Split(['#editors-container', '#renderer-container'], {
  sizes: [50, 50],
  direction: 'vertical',
  onDrag: refreshEditors,
  onDragEnd: refreshEditors,
});

Split(['#html-editor', '#css-editor', '#js-editor'], {
  sizes: [33, 33, 33],
  direction: 'horizontal',
  onDrag: refreshEditors,
  onDragEnd: refreshEditors,
});

require.config({ paths: { 'vs': './js/monaco/min/vs' }});
require(['vs/editor/editor.main'], function() {
  
  const htmlEditor = monaco.editor.create(
    document.getElementById('html-editor'), {
      language: 'html',
  });
  editors.push(htmlEditor);

  const cssEditor = monaco.editor.create(
    document.getElementById('css-editor'), {
      language: 'html',
  });
  editors.push(cssEditor);

  const jsEditor = monaco.editor.create(
    document.getElementById('js-editor'), {
      language: 'html',
  });
  editors.push(jsEditor);

  monaco.editor.setTheme('vs-dark');
  window.onresize = refreshEditors;
});