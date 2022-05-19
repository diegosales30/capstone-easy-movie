import { USER_SIGN_IN } from "./actionTypes";

const token = localStorage.getItem("@token") || "";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      const { user } = action;
      console.log(action);
      return user;

    default:
      return state;
  }
};
export default userReducer;
