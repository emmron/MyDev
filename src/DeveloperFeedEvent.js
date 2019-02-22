import React from 'react';
import logo from './react.svg';
import { Input, Container, Menu, Segment } from 'semantic-ui-react'
import { List, Image, Grid, Card, Feed, Icon } from 'semantic-ui-react'
import elliot from './elliot.jpg'
import './DeveloperFeedEvent.css';

import { Divider } from 'semantic-ui-react'

class DeveloperFeedEvent extends React.Component {


  render() {

  var numrows = 10;
  var inputrender = [];

for (var i = 0; i < numrows; i++) {
  inputrender.push(<Feed.Event className="devFeedEvent">
      <Feed.Label>
        <img src={elliot} />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
)
}




    return (inputrender);
  }
}

export default DeveloperFeedEvent;
