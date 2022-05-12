import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./modules/user/reducer";

const reducers = combineReducers({ signIn: userReducer, register: userReducer })

const store = createStore(reducers, applyMiddleware(thunk))


export default store