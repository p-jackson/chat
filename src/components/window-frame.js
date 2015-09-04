import React from 'react'
import WindowFrameControls from 'components/window-frame-controls'
import ContactList from 'components/contact-list'
import ChatContainer from 'components/chat-container'
import ChatVersionBadge from 'components/chat-version-badge'
import remote from 'remote'

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
    flexGrow: 1
  },
  frameControls: {
    position: 'fixed',
    top: 0,
    right: 0
  },
  version: {
    position: 'fixed',
    bottom: 0,
    right: 0
  }
}

export default class WindowFrame extends React.Component {
  render() {
    return (
      <div style={styles.self}>
        <ContactList style={styles.contactList} />
        <ChatContainer style={styles.rhs} />
        <ChatVersionBadge style={styles.version} />
        <WindowFrameControls style={styles.frameControls} />
      </div>
    )
  }
}
