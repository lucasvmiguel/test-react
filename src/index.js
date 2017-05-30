import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory'

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import counter from './reducers/counter.js';
import login from './reducers/login.js';

let store = createStore(combineReducers({ counter, login }), applyMiddleware(thunk));

// debug
store.subscribe(() => console.log(store.getState()));

const customHistory = createBrowserHistory();

const render = () => ReactDOM.render(<Routes history={customHistory} store={store} state={store.getState()} />, document.getElementById('root'));
// const render = () => ReactDOM.render(<Routes history={customHistory} />, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(render);