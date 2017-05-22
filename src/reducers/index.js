/*
Reducer file

Gets datat from an action.  This is done with Dispatch
in the action file
*/

import {combineReducers} from "redux";
import _ from "lodash";
import {PRODUCT_LOAD_SUCCESS,
        PRODUCT_LOAD_START,
        PRODUCT_LOAD_ERROR,
        COMMENT_LOAD_START,
        COMMENT_LOAD_SUCCESS,
        COMMENT_LOAD_ERROR,
        CONTACT_LOAD_START,
        CONTACT_LOAD_SUCCESS,
        CONTACT_LOAD_ERROR,
        VEHICLE_LOAD_START,
        VEHICLE_LOAD_SUCCESS,
        VEHICLE_LOAD_ERROR
} from "../actions/";


function comments(state = [], action) {
  switch (action.type) {
    case COMMENT_LOAD_START:
      return [];
    case COMMENT_LOAD_SUCCESS:
      return action.payload;
    case COMMENT_LOAD_ERROR:
      return [];
  }
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_START:
      return [];
    case PRODUCT_LOAD_ERROR:
      return [];
    case PRODUCT_LOAD_SUCCESS:
    return action.products;
      // console.log("products reducer returned here", action);
      // return state.concat(action.data);
    case 'PRODUCT_ADD':
      return [
        ...state,
        action.products
      ];
    case 'PRODUCT_REMOVE':
    //  return state.filter((product) => product !== action.product);
    return _.without(state, action.products);
  }
  return state;
}

function contacts(state = [], action) {
  switch (action.type) {
    case CONTACT_LOAD_START:
      return [];
    case CONTACT_LOAD_SUCCESS:
    console.log("success contacts load");
      return action.payload;
    case CONTACT_LOAD_ERROR:
      return [];
  }
  return state;
}

function vehicles(state = [], action) {
  switch (action.type) {
    case VEHICLE_LOAD_START:
      return [];
    case VEHICLE_LOAD_SUCCESS:
      return action.payload;
    case VEHICLE_LOAD_ERROR:
      return [];
  }
  return []; // default state
}



const rootReducer = combineReducers({
  comments,
  products,
  contacts,
  vehicles
});
export default rootReducer;
