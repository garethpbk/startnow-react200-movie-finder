import React, { Component } from 'react';

export default class MovieSearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Movie Finder</h1>
        <form>
          <div className="input-group mb-5">
            <input type="text" name="movie-input" placeholder="Find a movie..." className="form-control" />
            <div className="input-group-append">
              <button className="btn" type="submit">
                Go!
              </button>
            </div>
          </div>
        </form>

        <div className="card w-100 p-4">
          <div className="row">
            <div className="col-3">
              <img
                src="https://www.dvdsreleasedates.com/posters/800/A/Annihilation-2018-movie-poster.jpg"
                className="w-100"
              />
            </div>
            <div className="col-9">
              <h2>Movie Title</h2>
              <h4>Release Year</h4>
              <hr />
              <p>Lorum ipsum catsum dogsum</p>

              <a className="btn btn-primary float-right" href="#">
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
