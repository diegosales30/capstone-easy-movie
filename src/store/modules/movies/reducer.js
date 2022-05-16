import { LIST_MOVIES } from "./actionTypes"

const moviesReducer = (state = [], action) =>{
    switch(action.type){
        case LIST_MOVIES:
            const {movies} = action
            return movies
        default: 
            return state
    }
}
export default moviesReducer