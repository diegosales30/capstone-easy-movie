import axios from "axios";
import { listMovies } from "./actions";

export const listMoviesThunk = (next) => (dispatch) => {
  axios
    .get(`https://easy-movie.herokuapp.com/movies?_page=${next}&_limit=6`)
    .then((response) => {
      dispatch(listMovies(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
