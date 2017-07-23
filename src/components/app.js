import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ApodList from '../containers/apod_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ApodList />
      </div>

    );
  }
}
