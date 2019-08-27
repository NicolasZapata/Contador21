const  electron  = require('electron')
const path = require('path')
const url = require('url')

const {app, BrowserWindow} = electron

// Configurando Electron
let win;
createWindow = () => {
    win = new BrowserWindow({width: 600, height: 500})
    win.setMenu(null)
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)