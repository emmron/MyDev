import React from 'react';
import logo from './react.svg';
import './DeveloperList.css';
import { Input, Container, Menu, Segment } from 'semantic-ui-react'
import { List, Image, Grid, Card, Feed } from 'semantic-ui-react'
import RecentActivity from './RecentActivity';
import Header from './Header';
import DeveloperFeed from './DeveloperFeed';

class DeveloperList extends React.Component {
render() {
var numrows = 10;
var indents = [];
var names = ['Bob', 'Emmett', 'Raf', 'Adam'];
var locations = ['B1 Homes', 'Myaree Cranes', 'JMW', 'Noise and colour'];

for (var i = 0; i < numrows; i++) {
indents.push( <List.Item>
  <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
  <List.Content>
  <List.Header as='a'>{names[Math.floor(Math.random()*names.length)]}</List.Header>
  <List.Description>
    Last seen working on{' '}
    <a>
      <b>{locations[Math.floor(Math.random()*locations.length)]}</b>
    </a>{' '}
    just now.
  </List.Description>
</List.Content>
</List.Item>
);
}
return (
<div class="DeveloperList">
<Header />

<Container className="parentContainer">
<Grid columns={1}>
  <Grid.Row>
      <Grid.Column>
    </Grid.Column>

</Grid.Row>
</Grid>

<Grid columns={3}>
  <Grid.Row>
    <Grid.Column>
    <div class="recentActivity">
      <RecentActivity />
    </div>
  </Grid.Column>
  <Grid.Column>
    <div class="listContainer">
      <Card>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
      <List class="middleList">
        {indents}
        
      </List>
      </Card>
    </div>
  </Grid.Column>
  <Grid.Column>
  <Card>
    <DeveloperFeed />
    </Card>
  </Grid.Column>
</Grid.Row>
</Grid>
</Container>
</div>
);
}
}
export default DeveloperList;