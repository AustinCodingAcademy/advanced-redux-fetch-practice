import {combineReducers} from "redux";
import {
  PRODUCT_LOAD_SUCCESS,
  CONTACTS_LOAD_SUCCESS,
  VEHICLES_LOAD_SUCCESS,
  COMMENTS_LOAD_SUCCESS,
  PRODUCT_CREATE_START
} from "../actions";

function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_LOAD_SUCCESS:
      return action.comments;
  }
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_SUCCESS:
      return action.products;
    case PRODUCT_CREATE_START:
      return [
        ...state,
        action.product
      ];
  }
  return state;
}

function contacts(state = [], action) {
  switch (action.type) {
    case CONTACTS_LOAD_SUCCESS:
      return action.contacts;
  }
  return state;
}

function vehicles(state = [], action) {
  switch (action.type) {
    case VEHICLES_LOAD_SUCCESS:
      return action.vehicles;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,
  products,
  contacts,
  vehicles
});
export default rootReducer;
