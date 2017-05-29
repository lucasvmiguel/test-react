import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory'
import Routes from './routes';

// reducers
import counter from './reducers/counter.js';
import login from './reducers/login.js';

let store = createStore(combineReducers({ counter, login }));

// debug
store.subscribe(() => console.log(store.getState()));

const customHistory = createBrowserHistory();

const render = () => ReactDOM.render(<Routes history={customHistory} store={store} state={store.getState()} />, document.getElementById('root'));
// const render = () => ReactDOM.render(<Routes history={customHistory} />, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(render);