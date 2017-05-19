import {combineReducers} from "redux";
import {
  PRODUCT_LOAD_SUCCESS,
  CONTACTS_LOAD_SUCCESS
} from "../actions";

function comments(state = [], action) {
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_SUCCESS:
      return action.products;
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

const rootReducer = combineReducers({
  comments,
  products,
  contacts
});
export default rootReducer;
