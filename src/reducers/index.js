import {combineReducers} from "redux";

function comments(state = [], action) {
  return state;
}

function contacts(state = [], action) {
  return state;
}

function products(state = [], action) {
  return state;
}

function vehicles(state = [], action) {
  return state;
}
const rootReducer = combineReducers({
  comments
});
export default rootReducer;
