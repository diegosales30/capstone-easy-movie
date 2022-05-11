import { USER_SIGN_IN } from "./actionTypes"

const token = localStorage.getItem("@token") || ""
const defaultState = {
    user: {},
    token: ""
}

const userReducer = (state = defaultState, action) =>{
    switch(action.type){
        case USER_SIGN_IN:
            const { token } = action
            return {...state, token}
        
        default:
            return state
    }
}
export default userReducer