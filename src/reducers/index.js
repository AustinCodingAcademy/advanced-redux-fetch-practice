import {combineReducers} from "redux";
import {
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_START,
  PRODUCT_LOAD_ERROR
} from "../actions";

function comments(state = [], action) {
  return state;
}

function products(sate = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_START:
      return [];
    case PRODUCT_LOAD_ERROR:
      return [];
    case PRODUCT_LOAD_SUCCESS:
      return action.product;
  }
}


const rootReducer = combineReducers({
  comments,
  products
});
export default rootReducer;
