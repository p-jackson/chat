import React from 'react'
import remote from 'remote'
import Button from 'components/button'
import ipc from 'ipc'

const styles = {
  marginRight: { marginRight: 1 },
  minimizeIcon: { position: 'relative', top: 2 },
  close: {
    ':hover': {
      background: '#E81123',
      color: '#fff'
    },
    ':active': {
      background: '#E81123',
      opacity: 0.4,
      color: '#fff'
    }
  }
}

export default class WindowFrameControls {
  render() {
    return (
      <div {...this.props}>
        <Button
          className="icon-cog"
          style={styles.marginRight}
          onClick={this.onCog} />
        <Button style={styles.marginRight} onClick={this.onMinimize}>
          <span style={styles.minimizeIcon} className="icon-minus"></span>
        </Button>
        <Button
          className="icon-cancel"
          style={styles.close}
          onClick={this.onClose} />
      </div>
    )
  }

  onMinimize() {
    remote.getCurrentWindow().minimize()
  }

  onClose() {
    remote.getCurrentWindow().close()
  }

  onCog() {
    ipc.send('show-settings')
  }
}
