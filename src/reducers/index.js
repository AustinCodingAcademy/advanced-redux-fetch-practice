import { combineReducers } from "redux";

function comments(state = [], action) {
  return state;
}

function products(state = [], action) {
  if (action.type == "PRODUCTS_LOADED") {
    return action.value;
  }
  return state;
}

export default combineReducers({
  comments, products
});
