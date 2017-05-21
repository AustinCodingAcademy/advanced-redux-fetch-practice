import {combineReducers} from "redux";
import {
  COMMENTS_LOADED,
  PRODUCTS_LOADED,
  VEHICLES_LOADED,
  CONTACTS_LOADED
} from "../actions";

function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_LOADED:
      return action.comments;
  }
  return state;
}

function contacts(state = [], action) {
  switch (action.type) {
    case CONTACTS_LOADED:
      return action.contacts;
  }
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return action.products;
  }
  return state;
}

function vehicles(state = [], action) {
  switch (action.type) {
    case VEHICLES_LOADED:
      return action.vehicles;
  }
  return state;
}

export default combineReducers({
  comments,
  contacts,
  products,
  vehicles
});
