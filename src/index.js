import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BookList from './container/booklist'
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
 <div>
   <BookList />
   </div>
  , document.querySelector('.container'));