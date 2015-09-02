import React from 'react'
import Radium from 'radium'
import AppDrag from 'higher-order-components/app-drag'

const styles = {
  base: {
    background: '#E5E5E6',
    borderRight: '1px solid #D1D1D2'
  }
}

@AppDrag
@Radium
export default class ContactList extends React.Component {
  render() {
    return <div style={[styles.base, this.props.style]}></div>
  }
}
