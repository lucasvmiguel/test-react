import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Login from './Login.js';
import Counter from './Counter.js';
import { Increment, Decrement } from '../actions/counter.js';
import { Submit, Change } from '../actions/login.js';

const App = ({ store, state }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p className="App-intro">
      Response login: {state.login.response}
    </p>

    <Login count={state.login} onChange={Change(store)} onSubmit={Submit(store)} />
    <Counter count={state.counter} onIncrement={Increment(store)} onDecrement={Decrement(store)} />
  </div>
)

export default App;
