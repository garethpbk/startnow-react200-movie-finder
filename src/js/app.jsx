import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearchView from './components/MovieSearch';
import MovieDetailView from './components/MovieDetail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={MovieSearchView} />
          <Route path="/movie/:id" component={MovieDetailView} />
        </div>
      </Router>
    );
  }
}
