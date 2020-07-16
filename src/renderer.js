const remote = require('electron').remote;

const win = remote.getCurrentWindow(); /* Note this is different to the
html global `window` variable */

// When document has loaded, initialise
document.onreadystatechange = (event) => {
  if (document.readyState == "complete") {
    handleWindowControls();

    // document.getElementById('electron-ver').innerHTML = `${process.versions.electron}`;
  }
};

window.onbeforeunload = (event) => {
  /* If window is reloaded, remove win event listeners
  (DOM element listeners get auto garbage collected but not
  Electron win listeners as the win is not dereferenced unless closed) */
  win.removeAllListeners();
}

function handleWindowControls() {
  // Make minimise/maximise/restore/close buttons work when they are clicked
  document.getElementById('min-button').addEventListener("click", event => {
    win.minimize();
  });
  // electron has a bug where if you minimize the window it won't be reopened at the same size. Basically there's some excess window when you unminimize it. Can just be fixed by dragging the window around.

  document.getElementById('close-button').addEventListener("click", event => {
    win.close();
  });
}

// function sendToPython() {
//   var python = require('child_process').spawn('python', ['./py/calc.py', input.value]);
//   python.stdout.on('data', function (data) {
//     console.log("Python response: ", data.toString('utf8'));
//     result.textContent = data.toString('utf8');
//   });
//
//   python.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });
//
//   python.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });
//
// }
//
// .addEventListener('click', () => {
//   sendToPython();
// });
//
// btn.dispatchEvent(new Event('click'));
