import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'

// reducers
import counter from './reducers/counter.js';
import login from './reducers/login.js';

let store = createStore(combineReducers({ counter, login }));

// debug
store.subscribe(() => console.log(store.getState()));

const render = () => ReactDOM.render(<App store={store} state={store.getState()}/>, document.getElementById('root'));
registerServiceWorker();

render();
store.subscribe(render);