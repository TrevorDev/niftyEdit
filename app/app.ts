import $ = require("jquery")

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/typescript");



// import electron = require('electron');
// const BrowserWindow = electron.remote.BrowserWindow;
// $('body').on("click", ()=>{
//   console.log(electron)
//   var mainWindow = new BrowserWindow({width: 800, height: 600});
//
//   //mainWindow.setMenu(null);
//   //mainWindow.setFullScreen(true)
//   // and load the index.html of the app.
//   mainWindow.loadURL('file://' + __dirname + '/../app/index.html');
//   //mainWindow.loadURL('https://google.com');
//   // Open the DevTools.
//   //mainWindow.webContents.openDevTools();
//
//   // Emitted when the window is closed.
//   mainWindow.on('closed', function() {
//     // Dereference the window object, usually you would store windows
//     // in an array if your app supports multi windows, this is the time
//     // when you should delete the corresponding element.
//     mainWindow = null;
//   });
// })
