import { connect } from 'react-redux';
import MovieDetailView from './MovieDetailView';

function mapStoreToProps(store) {
  return {
    term: store.search.term,
    movie: store.search.movie
  };
}

export default connect(mapStoreToProps)(MovieDetailView);
