import { combineReducers } from 'redux';
import MovieSearchReducer from './components/MovieSearch/MovieSearchReducer';

const rootReducer = combineReducers({
  search: MovieSearchReducer
});

export default rootReducer;
