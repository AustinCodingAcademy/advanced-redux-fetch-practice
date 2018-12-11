// Create reducers based on the state in state.js
// Determine which action the reducers should care about
// return the appropriate value

import {combineReducers} from "redux";

function contacts(state = [],action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
}

function vehicles(state = [],action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}

function comments(state = [],action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}

function products(state = [],action) {
  if (action.type === "PRODUCTS_LOADED") {
    return action.value;
  }
  return state;
}

 
const rootReducer = combineReducers({
  comments, contacts, products, vehicles
});

export default rootReducer;


