import React from 'react';
import remote from 'remote';
import Button from 'components/button';

const styles = {
  minimize = { marginRight: 1 },
  minimizeIcon = { position: 'relative', top: 2 },
  closeHover = { background: '#E81123', color: '#fff' }
}

class WindowFrameControls extends React.Component {
  render() {
    return (
      <div style={...this.props}>
        <Button style={styles.minimize} onClick={this.onMinimize}>
          <span style={styles.minimizeIcon} className="icon-minus"></span>
        </Button>
        <Button className="icon-cancel" hoverStyle={styles.closeHover} onClick={this.onClose}></Button>
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

export default WindowFrameControls;
