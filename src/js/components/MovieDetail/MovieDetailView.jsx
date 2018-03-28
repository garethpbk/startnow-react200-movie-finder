import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return props.movie ? (
    <div>
      <h1 className="text-center">Movie Finder</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <img src={props.movie.data.Poster} className="w-100" />
        </div>
        <div className="col-7">
          <div className="card">
            <div className="card-header">
              <strong>Movie Details</strong>
            </div>
            <div className="card-body">
              <h3>{props.movie.data.Title}</h3>
              <span className="badge badge-primary mr-2">Released {props.movie.data.Year}</span>
              <span className="badge badge-primary mr-2">{props.movie.data.Runtime}</span>
              <span className="badge badge-primary mr-2">{props.movie.data.Genre}</span>
              <p className="mt-3">{props.movie.data.Plot}</p>
              <p>{props.movie.data.Awards}</p>

              <p className="mt-3">
                <span>
                  <strong>Metascore: </strong>
                </span>
                {props.movie.data.Metascore}
              </p>
              <p>
                <span>
                  <strong>IMDB: </strong>
                </span>
                {props.movie.data.imdbRating}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-primary mt-4">Back 2 Home</button>
      </Link>
    </div>
  ) : (
    <div>
      <h1 className="text-center">Movie Finder</h1>
      <hr />
      <h1 className="text-center">No search query!</h1>
      <Link to="/">
        <button className="btn btn-primary mt-4">Back 2 Home</button>
      </Link>
    </div>
  );
};
