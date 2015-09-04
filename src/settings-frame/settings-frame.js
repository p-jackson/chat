import BrowserWindow from 'browser-window'

export default class {
  constructor(options = {}) {
    options.width = options.width || 400
    options.height = options.height || 300

    this.window = new BrowserWindow(options)
    this.window.setMenuBarVisibility(false)
    this.window.loadUrl(`file://${__dirname}/settings-frame.html`)
  }

  on() {
    return this.window.on(...arguments)
  }

  bringToFront() {
    this.window.show()
  }

  close() {
    this.window.close()
  }
}
