import { USER_REGISTER, USER_SIGN_IN } from "./actionTypes";

export const signIn = (userData) => ({type: USER_SIGN_IN, userData})

export const register = (status) => ({type: USER_REGISTER, status})