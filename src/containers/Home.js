import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Counter from '../components/Counter.js';
import { Increment, Decrement } from '../actions/counter.js';

const HomeContainer = ({ counter, increment, decrement }) => (
  <div>
    <Link to="/about">go to about</Link>
    <Counter count={counter} onIncrement={increment} onDecrement={decrement} />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {counter: state.counter}
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);