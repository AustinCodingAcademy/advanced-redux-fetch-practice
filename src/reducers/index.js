import {combineReducers} from "redux";

function comments(state = [], action) {
  if(action.type === "COMMENTS_LOADED") {
    state = action.value;
  }
  return state;
}

function contacts(state = [], action) {
  if(action.type === "CONTACTS_LOADED") {
    state = action.value;
  }
  return state;
}

function products(state = [], action) {
  if(action.type === "PRODUCTS_LOADED") {
    state = action.value;
  }
  return state;
}

function vehicles(state = [], action) {
  if(action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,
  contacts,
  products,
  vehicles
});

export default rootReducer;
