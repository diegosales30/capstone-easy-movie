import { USER_REGISTER, USER_SIGN_IN } from "./actionTypes"

const token = localStorage.getItem("@token") || ""
const defaultState = {
    user: {},
    token: ""
}

const userReducer = (state = defaultState, action) =>{
    switch(action.type){
        case USER_SIGN_IN:
            const { userData } = action
            return  userData
        case USER_REGISTER:
            const {status} = action
            return status
        default:
            return state
    }
}
export default userReducer