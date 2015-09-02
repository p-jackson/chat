import React from 'react'
import drag from 'electron-drag'

export default ComposedComponent => class extends React.Component {
  componentDidMount() {
    this._clearDrag = drag(React.findDOMNode(this));
  }
  componentWillUnmount() {
    if (this._clearDrag)
      this._clearDrag();
  }
  render() {
    return <ComposedComponent {...this.props} />;
  }
};
