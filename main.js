const { app, BrowserWindow, nativeTheme } = require("electron");

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: undefined,
    backgroundMaterial: 'mica',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      height: 48,
      color: 'rgba(0, 0, 0, 0)',
      symbolColor: nativeTheme.shouldUseDarkColors ? 'white' : 'black',
    }
  });

  win.setMenuBarVisibility(false);

  win.loadFile("index.html");
}
