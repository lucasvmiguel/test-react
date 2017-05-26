const Increment = (store) => () => {
  store.dispatch({ type: 'COUNTER_INCREMENT' })
}

const Decrement = (store) => () => {
  store.dispatch({ type: 'COUNTER_DECREMENT' })
}

export {
  Decrement,
  Increment
}