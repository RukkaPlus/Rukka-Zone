function altElement0() {
  let element = document.getElementById('element-0'),
      editor  = ace.edit(element);
  element.style.width  = '100%';
  element.style.height = '150px';
  editor.setTheme('ace/theme/monokai');
  editor.session.setMode('ace/mode/c_cpp');
}
function altElement1() {
  let element = document.getElementById('element-1'),
      editor  = ace.edit(element);
  element.style.width  = '100%';
  element.style.height = '150px';
  editor.setTheme('ace/theme/crimson_editor');
}
function altElement2() {
  let element = document.getElementById('element-2'),
      editor  = ace.edit(element);
  element.style.width  = '100%';
  element.style.height = '150px';
  editor.session.setMode('ace/mode/javascript');
}
function altElement3() {
  let element = document.getElementById('element-3'),
      editor  = ace.edit(element);
  element.style.width  = '100%';
  element.style.height = '150px';
  editor.resize();
}
function altElement4() {
  let element = document.getElementById('element-4'),
      session0 = ace.createEditSession("Example code"),
      session1 = ace.createEditSession(["Example", "code"]);
      button0 = document.createElement('button'),
      button1 = document.createElement('button'),
      editor  = ace.edit(element);
  element.style.width  = '100%';
  element.style.height = '100px';
  button0.innerHTML = 'Session 0';
  button1.innerHTML = 'Session 1';
  button0.addEventListener('click', () => editor.setSession(session0));
  button1.addEventListener('click', () => editor.setSession(session1));
  element.after(button1);
  element.after(button0);
}