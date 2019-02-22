import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state
function handleItemClick(props) {
  return <h1>Hello, {props.name}</h1>;
}
    return (
      <Menu stackable>
        <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>


        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Logout
        </Menu.Item>
      </Menu>
    )
  }
}
