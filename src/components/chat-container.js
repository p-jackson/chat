import React from 'react'
import AppDrag from 'higher-order-components/app-drag'

@AppDrag
export default class {
  render() {
    return <div {...this.props} />
  }
}
