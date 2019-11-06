import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducer from './Store/Reducers';
import thunk from 'redux-thunk';
import {cache} from './Store/Middlewares';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, composeEnhancers(applyMiddleware(thunk, cache)));



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));



serviceWorker.unregister();
