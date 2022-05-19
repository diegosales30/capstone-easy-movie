import { LIST_MOVIES_CARROSEL } from "./actionTypes";

const moviesReducerCarrosel = (state = [], action) => {
  switch (action.type) {
    case LIST_MOVIES_CARROSEL:
      const { moviesCarrosel } = action;
      return moviesCarrosel;
    default:
      return state;
  }
};
export default moviesReducerCarrosel;
