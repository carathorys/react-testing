import * as React from 'react';
import { Link } from 'react-router';

import { Drawer, MenuItem } from 'material-ui';

const style = require('./style.css');
import { toggle, open, close } from 'modules/drawer';
const { connect } = require('react-redux');

@connect(
  (state) => ({ drawerState: state.drawer }),
  (dispatch) => ({
    toggleDrawer: () => dispatch(toggle()),
    openDrawer: () => dispatch(open()),
    closeDrawer: () => dispatch(close()),
  }),
)
export class Navigation extends React.Component<any, void> {
  public navigateWhenDocked() {

    const { toggleDrawer, drawerState } = this.props;
    console.log("DrawerState=", drawerState);

    if (drawerState.isDocked) {
      toggleDrawer();
    }
  }

  public render() {
    const { toggleDrawer, drawerState } = this.props;
    return (
      <Drawer className={style.Navigation} open={drawerState.isOpen}
        docked={drawerState.isDocked} onRequestChange={toggleDrawer}>
        <MenuItem onItemTouchTap={this.navigateWhenDocked}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onItemTouchTap={this.navigateWhenDocked}>
          <Link to="about">About</Link>
        </MenuItem>
        <MenuItem onItemTouchTap={this.navigateWhenDocked}>
          <Link to="counter">Counter</Link>
        </MenuItem>
        <MenuItem onItemTouchTap={this.navigateWhenDocked}>
          <Link to="stars">Stars</Link>
        </MenuItem>
      </Drawer>
    );
  }
}
