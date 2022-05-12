import axios from "axios"
import { listMovies } from "./actions"

export const listMoviesThunk = (next = 1) => (dispatch) =>{
    axios.get(`https://easy-movie.herokuapp.com/movies?_page="${next + 1}"&_limit=8`)
    .then((response)=>{
        dispatch(listMovies(response.data))
    })
    .catch((err)=>{
        console.log(err)
    })
}

