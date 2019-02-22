import React from 'react';
import logo from './react.svg';
import './Home.css';
import LoginForm from './LoginForm';
import { Input, Container, Menu, Segment } from 'semantic-ui-react'
import { List, Image, Grid, Card, Feed, Icon } from 'semantic-ui-react'
import Header from './Header';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
      <div className="headerContainer">
        <Header />
      </div>
      <Container className="LoginContainer">
        <LoginForm />
        </Container>
      </div>
    );
  }
}

export default Home;
