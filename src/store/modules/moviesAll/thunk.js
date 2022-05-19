import axios from "axios";

import { listMoviesCarrosel } from "./actions";

export const listMoviesThunkCarrosel = () => (dispatch) => {
  axios
    .get(`https://easy-movie.herokuapp.com/movies`)

    .then((response) => {
      dispatch(listMoviesCarrosel(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
