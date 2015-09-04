import React from 'react'
import Radium from 'radium'

const styles = {
  base: {
    border: 'none',
    background: 'transparent',
    minHeight: 30,
    minWidth: 30,
    outline: 'none',
    transition: '200ms',
    ':hover': {
      transition: 'none',
      background: 'rgba(0, 0, 0, 0.1)'
    },
    ':active': {
      background: 'rgba(0, 0, 0, 0.2)'
    }
  }
}

@Radium
export default class Button extends React.Component {
  render() {
    let { style, ...other } = this.props

    const finalStyle = [
      styles.base,
      this.style()
    ].concat(style)

    return (
      <button className="gray-hover-button" {...other} style={finalStyle}>
        {this.props.children}
      </button>
    )
  }

  style() {
    return {}
  }
}
