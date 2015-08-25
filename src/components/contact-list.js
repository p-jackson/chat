import React from 'react'
import { extend } from 'lodash'

const styles = {
  base: {
    background: '#E5E5E6',
    borderRight: '1px solid #D1D1D2'
  }
}

export default class ContactList {
  render() {
    let s = extend({}, this.props.style, styles.base)
    return <div style={s}></div>
  }
}
