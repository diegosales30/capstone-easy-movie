import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./modules/user/reducer";
import moviesReducer from "./modules/movies/reducer";
import searchMoviesReducer from "./modules/searchMovie/reducer";

const reducers = combineReducers({ signIn: userReducer ,  movies: moviesReducer,  moviesSearch: searchMoviesReducer})

const store = createStore(reducers, applyMiddleware(thunk))


export default store