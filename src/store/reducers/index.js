import {combineReducers} from 'redux';
import {MovieReducer} from './movie';

const reducers = combineReducers({
  movies: MovieReducer,
});

export default reducers;
