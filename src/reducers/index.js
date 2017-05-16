import {combineReducers} from "redux";

function comments(state = [], action) {
  return state;
}

export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });
    fetch("http://localhost:4001/products").then((response) => {
      console.log("Ivo Rocks", response);
      return response.json();
    }).then((data) => {
      dispatch(productLoadSuccess(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}


export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";

export function productLoadError() {

}


export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export function productLoadSuccess() {

}


// Contacts section


export const CONTACTS_LOAD_START = "CONTACTS_LOAD_START";

export function contactsLoadStart() {
  return (dispatch) => {
    dispatch({
      type: CONTACTS_LOAD_START
    });
    fetch("http://localhost:4001/contacts").then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(contactsLoadSuccess(data));
    })
    .catch(() => {
      dispatch(contactsLoadError());
    });
  };
}


export const CONTACTS_LOAD_SUCCESS = "CONTACTS_LOAD_START";

export function contactsLoadSuccess() {

}

export const CONTACTS_LOAD_ERROR = "CONTACTS_LOAD_ERROR";

export function contactsLoadError() {

}


// Comments section

export const COMMENTS_LOAD_START = "COMMENTS_LOAD_START"

export function commentsLoadStart() {
  return (dispatch) =>{
    dispatch({
      type: COMMENTS_LOAD_START
    });
    fetch("http://localhost:4000/comments").then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(commentsLoadSuccess(data));
    })
    .catch(() => {
      dispatch(commentsLoadError());
    });
  };
}


export const COMMENTS_LOAD_SUCCESS = "COMMENTS_LOAD_SUCCESS";

export function commentsLoadSuccess() {

}

export const COMMENTS_LOAD_ERROR = "COMMENTS_LOAD_ERROR";

export function commentsLoadError() {

}



const rootReducer = combineReducers({
  comments
});
export default rootReducer;
