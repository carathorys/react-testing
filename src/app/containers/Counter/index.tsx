import * as React from 'react';
import { increment, decrement } from 'modules/counter/';
import { ICounter } from 'models/counter';
import { ICounterAction } from 'models/counter';
import { RaisedButton } from 'material-ui';
const { connect } = require('react-redux');
const style = require('./style.css');

interface IProps {
  counter: ICounter;
  increment: Redux.ActionCreator<ICounterAction>;
  decrement: Redux.ActionCreator<ICounterAction>;
}

@connect(
  (state) => ({ counter: state.counter }),
  (dispatch) => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  }),
)

class Counter extends React.Component<IProps, void> {
  public render() {
    const { increment, decrement, counter } = this.props;

    return (
      <div className={style.Counter}>
        <h4>Számláló példa</h4>
        <RaisedButton
          name="incBtn"
          onClick={increment}
          primary={true}
          label="INCREMENT" />
        <RaisedButton
          name="decBtn"
          onClick={decrement}
          secondary={true}
          disabled={counter.count <= 0}
          label="DECREMENT" />
        <p>{counter.count}</p>
      </div>
    );
  }
}

export { Counter }
