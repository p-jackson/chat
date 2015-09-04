import app from 'app'
import crashReporter from 'crash-reporter'
//import Menu from 'menu'
import ipc from 'ipc'

//import appMenu from './app-menu'
import ChatFrame from './chat-frame/chat-frame'
import SettingsFrame from './settings-frame/settings-frame'

crashReporter.start()

//Menu.setApplicationMenu(appMenu)

// Need to keep a reference to all windows so the GC doesn't clean them up.
let allChatFrames = new Set()

// Keep a reference to the settings dialog, because we only ever want one.
let settingsFrame = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('ready', () => {
  let chatFrame = new ChatFrame()
  allChatFrames.add(chatFrame)
  chatFrame.on('closed', () => {
    allChatFrames.delete(chatFrame)
    if (!allChatFrames.length && settingsFrame && process.platform !== 'darwin')
      settingsFrame.close()
  })
})

ipc.on('show-settings', () => {
  if (settingsFrame) {
    settingsFrame.bringToFront()
    return
  }

  settingsFrame = new SettingsFrame()
  settingsFrame.on('closed', () => settingsFrame = null)
})
