import React from 'react';
import ReactDOM from 'react-dom';


import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import Root from './Root';

import reducers from './reducers';

import '../style/style.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const app = document.getElementById('app');

ReactDOM.render(<Root store={createStoreWithMiddleware(reducers)}/>, app);
