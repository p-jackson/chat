import React from 'react';
import WindowFrameControls from 'components/window-frame-controls';

const packageJson = require('root/package.json');

const style = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

class WindowFrame extends React.Component {
  render() {
    return (
      <div className="windowFrame" style={style}>
        <WindowFrameControls />
        <h1>chat v{packageJson.version}</h1>
        We are using io.js {process.version}
        and Electron {process.versions['electron']}.
      </div>
    );
  }
}

export default WindowFrame;
