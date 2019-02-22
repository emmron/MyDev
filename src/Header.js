import React from 'react';
import logo from './react.svg';
import './Header.css';
import { Input, Container, Menu, Segment } from 'semantic-ui-react'
import { List, Image, Grid, Card, Feed } from 'semantic-ui-react'
import MenuHeader from './MenuHeader'


class Header extends React.Component {
  render() {
    return (
      <div className="Header-top">
      <Container>
      <div class="navbar-header">
          </div>
          <div className="menuHeader">
          <MenuHeader />
          </div>
          </Container>
      </div>
    );
  }
}

export default Header;
