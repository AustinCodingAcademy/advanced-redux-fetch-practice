import {combineReducers} from "redux";

/* eslint-disable no-unused-vars*/

import {
  PRODUCT_LOAD_START,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_FAILURE
} from "../actions";

function comments(state = [], action) {
  return state;
}

function vehicles(state = [], action) {
  return state;
}

function contacts(state = [], action) {
  return state;
}
// Need to put in the conditional for this switch/case statement. if the action
// is successful do something else, do somthing else
function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_START:
      return [];
    case PRODUCT_LOAD_FAILURE:
      return [];
    case PRODUCT_LOAD_SUCCESS:
      return action.products;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,
  products,
  vehicles,
  contacts
});

export default rootReducer;
