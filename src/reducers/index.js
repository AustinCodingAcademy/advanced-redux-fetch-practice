import { combineReducers } from "redux";
import {
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_START,
  PRODUCT_LOAD_ERROR,
  COMMENT_LOAD_SUCCESS,
  COMMENT_LOAD_START,
  COMMENT_LOAD_ERROR
 } from "../actions";
/* eslint-disable no-unused-vars */

function contacts(state = [], action) {
  return state;
}

function vehicles(state = [], action) {
  return state;
}

function comments(state = [], action) {
  switch (action.type) {
    case COMMENT_LOAD_START:
      return [];
    case COMMENT_LOAD_ERROR:
      return [];
    case COMMENT_LOAD_SUCCESS:
    console.log("comments reducer return", action);
      return action.payload;
  }
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_START:
      return [];
    case PRODUCT_LOAD_ERROR:
      return [];
    case PRODUCT_LOAD_SUCCESS:
    console.log("products reducer return", action);
      return action.payload;
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
