import React from 'react';
import WindowFrameControls from 'components/window-frame-controls';
import ContactList from 'components/contact-list';
import ChatVersionBadge from 'components/chat-version-badge';

const styles = {
  self: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  contactList: {
    flexGrow: 0,
    flexBasis: 250
  },
  rhs: {
    flexGrow: 1,
    WebkitAppRegion: 'drag'
  },
  frameControls: {
    position: 'fixed',
    top: 0,
    right: 0,
    WebkitAppRegion: 'no-drag'
  },
  version: {
    position: 'fixed',
    bottom: 0,
    right: 0
  }
}

class WindowFrame extends React.Component {
  render() {
    return (
      <div style={styles.self}>
        <ContactList style={styles.contactList} />
        <div style={styles.rhs}></div>
        <ChatVersionBadge style={styles.version} />
        <WindowFrameControls style={styles.frameControls} />
      </div>
    );
  }
}

export default WindowFrame;
