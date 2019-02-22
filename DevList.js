import React, { Component } from 'react';

export default class DevList extends Component {
  render() {
    return (
      <div className="devlist">
        { this.props.children }
      </div>
    )
  }
}
