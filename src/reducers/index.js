import {combineReducers} from "redux";
import { COMMENTS_LOAD_SUCCESS } from "../actions";
import { VEHICLE_LOAD_SUCCESS } from "../actions";
import { CONTACTS_LOAD_SUCCESS } from "../actions";
import {PRODUCT_LOAD_SUCCESS } from "../actions";

function comments(state = [], action) {
  if (action.type === COMMENTS_LOAD_SUCCESS) {
    return action.comments;
  }
  return state;
}

function vehicles(state = [], action) {
  if (action.type === VEHICLE_LOAD_SUCCESS) {
    return action.vehicles;
  }
  return state;
}

function contacts(state = [], action) {
  if (action.type === CONTACTS_LOAD_SUCCESS) {
    return action.contacts;
  }
  return state;
}
function products(state = [], action) {
  if (action.type === PRODUCT_LOAD_SUCCESS) {
    return action.products;
  }
  return state;
}
const rootReducer = combineReducers({
  comments,
  vehicles,
  contacts,
  products
});

export default rootReducer;
