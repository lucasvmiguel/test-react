function counter(state = 0, action) {
  switch (action.type) {
  case 'COUNTER_INCREMENT':
    state = state + 1;
    return state;
  case 'COUNTER_DECREMENT':
    state = state - 1;
    return state;
  default:
    return state;
  }
}

export default counter;