import React, { Component } from 'react';
import BookList from '../container/booklist';
import SelectedBook from '../container/activeBook'

export default class App extends Component {
  render() {
    return (
      <div><BookList />
      <SelectedBook />
      </div>
    );
  }
}
