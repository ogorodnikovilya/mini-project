import { combineReducers } from 'redux';
import { jokeReducer } from './joke';

export const rootReducer = combineReducers({
  joke: jokeReducer,
});
