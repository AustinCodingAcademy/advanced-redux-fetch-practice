import {combineReducers} from "redux";

function contacts(state = [], action) {
  return state;
}

function comments(state = [], action) {
  return state;
}

function products(state = [], action) {
  return state;
}

function vehicles(state = [], action) {
  return state;
}

export default combineReducers({
  contacts, comments, products, vehicles
});

