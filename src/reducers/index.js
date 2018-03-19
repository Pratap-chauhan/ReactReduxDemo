import { combineReducers } from 'redux';
import booksReducer from './reducer_booklist';


const rootReducer = combineReducers({
  Books : booksReducer
})

export default rootReducer;
