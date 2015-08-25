import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';
import Menu from 'menu';

import appMenu from './app-menu';

crashReporter.start();

//Menu.setApplicationMenu(appMenu);

// Need to keep a reference to all windows so the GC doesn't clean them up.
let allWindows = new Set();

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin')
      app.quit();
});

app.on('ready', () => {
   let newWindow = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false
   });
   newWindow.loadUrl(`file://${__dirname}/frame.html`);

   allWindows.add(newWindow);
   newWindow.on('closed', () => allWindows.delete(newWindow));
});
