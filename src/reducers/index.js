import {combineReducers} from "redux";

function contacts(state = [], action) {
  if(action.type === "CONTACTS_LOADED"){
    return action.value;
  }
  return state;
}

function comments(state = [], action) {
  return state;
}




const rootReducer = combineReducers({
  contacts,

});

export default rootReducer;
