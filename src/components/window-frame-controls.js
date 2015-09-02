import React from 'react';
import remote from 'remote';
import Button from 'components/button';

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
        <Button className="icon-cog" style={styles.marginRight}></Button>
        <Button style={styles.marginRight} onClick={this.onMinimize}>
          <span style={styles.minimizeIcon} className="icon-minus"></span>
        </Button>
        <Button className="icon-cancel" style={styles.close} onClick={this.onClose}></Button>
      </div>
    )
  }

  onMinimize() {
    remote.getCurrentWindow().minimize();
  }

  onClose() {
    remote.getCurrentWindow().close();
  }
}
