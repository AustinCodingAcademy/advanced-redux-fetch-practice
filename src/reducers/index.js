import {combineReducers} from "redux";
import {
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_START,
  PRODUCT_LOAD_ERROR
 } from "..//actions";
/* eslint-disable no-unused vars */

function comments(state = [], action) {
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_START:
      return [];
    case PRODUCT_LOAD_ERROR:
      return [];
    case PRODUCT_LOAD_SUCCESS:
      return action.products;
    case "something":
      return [
        ...state,
        action.products
      ];
      // could use lodash here
      // return _.without(state, action.products);
  }
  return state;
}


const rootReducer = combineReducers({
  comments,
  products
});
export default rootReducer;
