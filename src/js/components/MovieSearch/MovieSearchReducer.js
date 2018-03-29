const defaultState = {
  term: '',
  movie: ''
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_TERM': {
      return {
        ...state,
        term: payload
      };
    }

    case 'GET_TERM_FULFILLED': {
      return {
        ...state,
        movie: payload
      };
    }

    default: {
      return state;
    }
  }
}
