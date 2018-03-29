import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  if (props.movie && props.movie.data.Response === 'False') {
    return (
      <div className="card w-100">
        <h1 className="text-center">Enter a valid movie title!</h1>
      </div>
    );
  }
  return props.movie ? (
    <div className="card w-100">
      <div className="row">
        <div className="col-3">
          <img src={props.movie.data.Poster} className="w-100" />
        </div>
        <div className="col-9 p-4">
          <h2>{props.movie.data.Title}</h2>
          <h4>{props.movie.data.Year}</h4>
          <hr />
          <p>{props.movie.data.Plot}</p>

          <Link to={`/movie/${props.movie.data.imdbID}`}>
            <button className="btn btn-primary float-right" href="#">
              More Information
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};
