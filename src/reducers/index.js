import {combineReducers} from "redux";
import {
  // PRODUCT_LOAD_SUCCESS,
  // PRODUCT_LOAD_START,
  // PRODUCT_LOAD_ERROR,
  CONTACTS_LOADED,
  COMMENTS_LOADED,
  PRODUCTS_LOADED,
  VEHICLES_LOADED
 } from "..//actions";

function contacts(state = [], action) {
  switch (action.type) {
    case CONTACTS_LOADED:
      return action.contacts;
  }
  return state;
}

function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_LOADED:
      return action.value;
  }
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return action.value;
  }
  return state;
}

function vehicles(state = [], action) {
  switch (action.type) {
    case VEHICLES_LOADED:
      return action.value;
  }
  return state;
}

// function products(state = [], action) {
//   switch (action.type) {
//     case PRODUCT_LOAD_START:
//       return [];
//     case PRODUCT_LOAD_ERROR:
//       return [];
//     case PRODUCT_LOAD_SUCCESS:
//       return action.products;
//     case "something":
//       return [
//         ...state,
//         action.products
//       ];
//       // could use lodash here
//       // return _.without(state, action.products);
//   }
//   return state;
// }


const rootReducer = combineReducers({
  contacts,
  comments,
  products,
  vehicles
});
export default rootReducer;
