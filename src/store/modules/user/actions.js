import { USER_SIGN_IN } from "./actionTypes";

export const signIn = (token) => ({type: USER_SIGN_IN, token})