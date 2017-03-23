import thunkMiddleware from 'redux-thunk';
import { alias } from 'react-chrome-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import companiesSource from '../aliases/companiesSource';
import similarCompaines from '../aliases/similarCompaines';

const middlewares = [
    alias(companiesSource),
    alias(similarCompaines),
    thunkMiddleware
];

export default createStore(rootReducer, applyMiddleware(...middlewares));