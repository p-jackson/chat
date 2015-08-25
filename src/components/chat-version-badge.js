import React from 'react';

const packageJson = require('root/package.json');

export default class ChatVersionBadge {
  render() {
    return <div {...this.props}>chat v{packageJson.version}</div>
  }
}
