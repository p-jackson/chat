import React from 'react'
import Radium from 'radium'
import AppDragMixin from 'component-mixins/app-drag-mixin'

const styles = {
  base: {
    background: '#E5E5E6',
    borderRight: '1px solid #D1D1D2'
  }
}

@AppDragMixin
@Radium
export default class ContactList extends React.Component {
  render() {
    return <div style={[styles.base, this.props.style]}></div>
  }
}
