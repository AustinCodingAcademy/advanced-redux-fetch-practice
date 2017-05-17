import {combineReducers} from "redux";

function vechicles(state = [], action) {
  if (action.type === "VECHICLES_LOADED") {
    return (action.value);
  }
  return state;
}

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return (action.value);
  }
  return state;
}

function contacts(state = [], action) {
  if (action.type === "CONTACTS_LOADED") {
    return (action.value);
  }
  return state;
}

function products(state = [], action) {
  if (action.type === "PRODUCTS_LOADED") {
    return (action.value);
  }
  return state;
}

const rootReducer = combineReducers({
  comments,
  contacts,
  vechicles,
  products
});
export default rootReducer;
