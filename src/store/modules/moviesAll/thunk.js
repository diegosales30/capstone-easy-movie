import axios from "axios";
import { listMoviesCarrosel } from "./actions";

export const listMoviesThunkCarrosel = () => (dispatch) => {
  axios
    .get(`https://easy-movie.herokuapp.com/movies`)
    .then((response) => {
      localStorage.setItem("moviesCarrosel", JSON.stringify(response.data));
      dispatch(listMoviesCarrosel(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
