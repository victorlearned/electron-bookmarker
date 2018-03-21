//This format is ES6 destructuring. app & BrowserWindow are both properties of the object that require returns
//and we use destructuring to easily assign to variables (of the same name) easily available without having another line to assign
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    const mainWindow = new BrowserWindow();
    console.log('The application is ready');
});