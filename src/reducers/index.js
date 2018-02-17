import {combineReducers} from "redux";

function comments(state = [], action) {
  switch(action.type) {
    case "COMMENTS_LOADED":
      return action.value
    default:
      return state
  }
}

function contacts(state = [], action) {
  switch(action.type) {
    case "CONTACTS_LOADED":
      return action.value
    default:
      return state
  }
}

function vehicles(state = [], action) {
  switch(action.type) {
    case "VEHICLES_LOADED":
      return action.value
    default:
      return state
  }
}

function products(state = [], action) {
  switch(action.type) {
    case "PRODUCTS_LOADED":
      return action.value
    default:
      return state
  }
}


const rootReducer = combineReducers({
  comments,
  contacts,
  vehicles,
  products
});
export default rootReducer;
