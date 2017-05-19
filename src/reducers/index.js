import {combineReducers} from "redux";
import {PRODUCT_LOAD_SUCCESS} from "../actions";

function comments(state = [], action) {
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_SUCCESS:
      return action.products;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,
  products
});
export default rootReducer;
