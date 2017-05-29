const appConfig = require('../../../../config/main');

import * as React from 'react';
import { Helmet } from 'react-helmet';

import { AppBar } from 'material-ui';
import { connect } from 'react-redux';
const style = require('./style.css');

@connect()
export class App extends React.Component<any, any> {

  constructor(props) {
    super(props);
    console.log('props => ', props);
    this.state = { open: false };
  }

  public handleToggle = () => this.setState({open: !this.state.open});

  public render() {
    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle} />
        {this.props.children}
      </section>
    );
  }
}
