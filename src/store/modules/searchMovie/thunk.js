import axios from "axios";
import { searchMovies } from "./action";

export const searchMoviesThunk = (inputValue) => (dispatch) => {
  axios
    .get(`https://easy-movie.herokuapp.com/movies?name=${inputValue}`)
    .then((response) => {
      dispatch(searchMovies(response.data));
    })
    .catch((err) => console.log(err));
};
