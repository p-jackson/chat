import React from 'react';
import remote from 'remote';
import Button from 'components/button';

const style = {
   position: 'fixed',
   top: 0,
   right: 0
};

const minimizeStyle = { marginRight: 1 }
const closeHoverStyle = { background: 'red' }

class WindowFrameControls extends React.Component {
   render() {
      return (
         <div className="windowFrameControls" style={style}>
            <Button style={minimizeStyle} onClick={this.onMinimize}>_</Button>
            <Button hoverStyle={closeHoverStyle} onClick={this.onClose}>x</Button>
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
