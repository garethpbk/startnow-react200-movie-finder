import React, { Component } from 'react';
import { enterTerm, getTerm } from './MovieSearchActions';
import MovieInfoView from '../MovieInfo/MovieInfoView';

export default class MovieSearchView extends Component {
  constructor(props) {
    super(props);

    this.handleEnterSearch = this.handleEnterSearch.bind(this);
    this.handleSendSearch = this.handleSendSearch.bind(this);
  }

  handleEnterSearch(e) {
    const { dispatch } = this.props;
    dispatch(enterTerm(e.target.value));
  }

  handleSendSearch(e) {
    e.preventDefault();
    const { term, dispatch } = this.props;
    dispatch(getTerm(term));
  }

  render() {
    const { movie } = this.props;
    return (
      <div>
        <h1 className="text-center">Movie Finder</h1>
        <hr />
        <form>
          <div className="input-group mb-5">
            <input
              type="text"
              name="movie-input"
              placeholder="Find a movie..."
              className="form-control"
              onChange={this.handleEnterSearch}
            />
            <div className="input-group-append">
              <button className="btn" type="submit" onClick={this.handleSendSearch}>
                Go!
              </button>
            </div>
          </div>
        </form>

        <MovieInfoView movie={movie} />
      </div>
    );
  }
}
