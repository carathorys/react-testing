import * as React from 'react';
import { Link } from 'react-router';

import { Drawer, MenuItem } from 'material-ui';
import { connect } from 'react-redux';

// const style = require('./style.css');
@connect()
export class Navigation extends React.Component<any, any> {

  constructor(props) {
    super(props);
    console.log("props => ", props);
    this.state = { open: false };
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <Drawer open={this.state.open}>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="about">About</Link></MenuItem>
        <MenuItem><Link to="counter">Counter</Link></MenuItem>
        <MenuItem><Link to="stars">Stars</Link></MenuItem>
      </Drawer>
    );
  }
}
