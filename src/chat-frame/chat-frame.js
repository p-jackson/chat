import BrowserWindow from 'browser-window'

export default class {
  constructor(options = {}) {
    options.width = options.width || 600
    options.height = options.height || 500
    options.frame = false

    this.window = new BrowserWindow(options)
    this.window.loadUrl(`file://${__dirname}/chat-frame.html`)
  }

  on() {
    return this.window.on(...arguments)
  }
}
