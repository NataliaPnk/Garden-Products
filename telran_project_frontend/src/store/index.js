import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const rootReducer = (state = {}, action) => state; 
    
export const store = createStore(rootReducer, applyMiddleware(thunk)); 