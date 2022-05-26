import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import postsReducer from './postRedux';

const subreducers = {
  posts: postsReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
