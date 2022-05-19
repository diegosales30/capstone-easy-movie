import { SEARCH_MOVIES } from "./actionTypes";

export const searchMovies = (moviesSearch) => ({
  type: SEARCH_MOVIES,
  moviesSearch,
});
