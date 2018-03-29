import { connect } from 'react-redux';
import MovieSearchView from './MovieSearchView';

function mapStoreToProps(store) {
  return {
    term: store.search.term,
    movie: store.search.movie
  };
}

export default connect(mapStoreToProps)(MovieSearchView);
