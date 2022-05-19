import { SEARCH_MOVIES } from "./actionTypes";

const searchMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return action.moviesSearch;

    default:
      return state;
  }
};

export default searchMoviesReducer;
