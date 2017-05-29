const appConfig = require('../../../../config/main');

import * as React from 'react';
import { Helmet } from 'react-helmet';

import { AppBar, Toggle } from 'material-ui';

const style = require('./style.css');
import { toggle, open, close, toggleDock } from 'redux/modules/drawer';
import { Navigation } from 'components';
const { connect } = require('react-redux');

@connect(
  (state) => ({ drawerState: state.drawer }),
  (dispatch) => ({
    toggleDrawer: () => dispatch(toggle()),
    toggleDock: () => dispatch(toggleDock()),
    openDrawer: () => dispatch(open()),
    closeDrawer: () => dispatch(close()),
  }),
)
export class App extends React.Component<any, any> {

  public render() {
    const { toggleDock, toggleDrawer } = this.props;

    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <AppBar title="Title"
          onLeftIconButtonTouchTap={toggleDrawer}
          iconElementRight={<Toggle className={style.toggleDock} onToggle={toggleDock} />}>
          <Navigation />
        </AppBar>
        {this.props.children}
      </section>
    );
  }
}
