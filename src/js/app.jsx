import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieDetailContainer from './containers/MovieDetailContainer';

import MovieSearchView from './components/MovieSearch/MovieSearchView';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={MovieSearchView} />
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}
