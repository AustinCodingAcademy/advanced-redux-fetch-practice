import {combineReducers} from "redux";

function contacts(state = [], action) {
  return state;
}

function comments(state = [], action) {
  return state;
}

function products(state = [],action) {
  if (action.type === "PRODUCTS_LOADED") {
    return action.value;
  }
  return state;
}

function vehicles(state = [], action) {
  return state;
}
 
const rootReducer = combineReducers({
  contacts, comments, products, vehicles
});
export default rootReducer;
