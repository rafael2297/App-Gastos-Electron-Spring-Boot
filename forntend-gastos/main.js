const { app, BrowserWindow } = require('electron')
const path = require('path')
const { spawn } = require('child_process')

let backendProcess = null

function createWindow() {
    // Define o caminho para o arquivo .jar do backend
    // Certifique-se de que o nome do arquivo e o caminho estão corretos!
    const backendPath = path.join(__dirname, 'backend', 'controle-despesas-0.0.1-SNAPSHOT.jar')

    // Inicia o processo do backend em Java
    backendProcess = spawn('java', ['-jar', backendPath])

    backendProcess.stdout.on('data', (data) => {
        console.log(`Backend: ${data}`);
    });

    backendProcess.stderr.on('data', (data) => {
        console.error(`Backend Erro: ${data}`);
    });

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // Carrega a página do seu frontend
    win.loadFile('index.html')

    // Adiciona um evento para fechar o backend quando a janela do frontend for fechada
    win.on('closed', () => {
        if (backendProcess) {
            backendProcess.kill();
            console.log('Backend fechado.');
        }
    });
}

// Inicia a janela do Electron e o backend
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// Fecha o backend quando o app do Electron é fechado
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        if (backendProcess) {
            backendProcess.kill();
        }
        app.quit()
    }
})