import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import main from './main';
import companiesData from './companiesData';
import similarCompaniesData from './similarCompaniesData';

// export default combineReducers({ main, companiesData, similarCompaniesData, routing: routerReducer });
export default combineReducers({ main, companiesData, similarCompaniesData });