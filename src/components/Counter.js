import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ onIncrement, onDecrement, count }) => (
  <div>
    <button onClick={onIncrement}>+</button>
    <label>{count}</label>
    <button onClick={onDecrement}>-</button>
  </div>
)

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default Counter;
