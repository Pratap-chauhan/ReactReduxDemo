import { combineReducers } from 'redux';
import booksReducer from './reducer_booklist';
import ActiveBookReducer from './reducer_activeBook'


const rootReducer = combineReducers({
  Books : booksReducer,
  ActiveBook : ActiveBookReducer
})

export default rootReducer;
