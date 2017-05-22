/*
actions + action creator functions
./actions/index.js

Actions are payloads of information that send data from your application to your store.

Action creators are exactly that—functions that create actions.

By usingn "THUNK" middleware we can return a function for callback vs an
object.  Below we use "dispatch" over and over

dispatch can only pass actions.

*/

// actions
export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";
export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";
export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";

export const COMMENT_LOAD_START = "COMMENT_LOAD_START";
export const COMMENT_LOAD_SUCCESS = "COMMENT_LOAD_SUCCESS";
export const COMMENT_LOAD_ERROR = "COMMENT_LOAD_ERROR";

export const VEHICLE_LOAD_START = "VEHICLE_LOAD_START";
export const VEHICLE_LOAD_SUCCESS = "VEHICLE_LOAD_SUCCESS";
export const VEHICLE_LOAD_ERROR = "VEHICLE_LOAD_ERROR";

export const CONTACT_LOAD_START = "CONTACT_LOAD_START";
export const CONTACT_LOAD_SUCCESS = "CONTACT_LOAD_SUCCESS";
export const CONTACT_LOAD_ERROR = "CONTACT_LOAD_ERROR";

// action creator
export function productLoadStart() {
  return (dispatch) => {  // this is a thunk
    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch("http://localhost:4001/products")
      .then((response) => {
        console.log("execute this when data is retrieved.", response);
        return response.json();
      })
      .then((data) => {
        console.log('parsed json', data)
        dispatch(productLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(productLoadError());
        console.log("oops, error!");
      });
  };
}

// actions
// export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

// action creator
export function productLoadSuccess(products) {
  console.log("produces inside actions", products)
  return {
    type: PRODUCT_LOAD_SUCCESS,
    // products: products  ---short hand is belwo
    // payload:  products - aka
      products
    // data: products

  };
}

export function productLoadError() {
  return {
    type: PRODUCT_LOAD_ERROR,
    message: " "
  };
}

/*  ############################################### */
export function commentLoadStart() {
  return (dispatch) => {
    dispatch({
      type: COMMENT_LOAD_START
    });

    fetch("http://localhost:4001/comments")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(commentLoadSuccess(data));
    })
    .catch((err) => {
      dispatch(commentLoadError(err));
    });

  };
}

export function commentLoadSuccess(comments) {
  return {
    type: COMMENT_LOAD_SUCCESS,
    payload: comments
  };
}

export function commentLoadError() {
  return (dispatch) => {
    dispatch({
      type: COMMENT_LOAD_ERROR
    });
  };
}

/*  ############################################### */
export function vehicleLoadStart() {
  return (dispatch) => {
    dispatch({
      type: VEHICLE_LOAD_START
    });

    fetch("http://localhost:4001/vehicles")
      .then((response) => {
        console.log("vehicle thunk", response);
        return response.json();
      })
      .then((data) => {
        console.log("vehicle text confverted .then log", data)
        dispatch(vehicleLoadSucess(data));
      })
      .catch((err) => {
        console.log("Error inside vehicle thunk", err);
      });
  };
}

export function vehicleLoadSucess(vehicles) {
  return {
    type: VEHICLE_LOAD_SUCCESS,
    payload: vehicles
  };
}

export function vehicleLoadError() {
  return (dispatch) => {
    dispatch({
      type: VEHICLE_LOAD_ERROR
    });
  };
}

/*  ############################################### */
export function contactLoadStart(contacts) {
  return (dispatch) => {
    dispatch({
      type: CONTACT_LOAD_START
    });

    fetch("http://localhost:4001/contacts")
      .then((response) => {
        console.log("Execute this when data is retrieved inside contacts thunk", response);
        return response.json();
      })
      .then((data) => {
        console.log("Contacts Then Log", data);
        dispatch(contactLoadSuccess(data));
      })
      .catch((err) => {
        console.log("Error inside contacts thunk", err);
      });
  };
}

export function contactLoadSuccess(contacts) {
  return {
    type: CONTACT_LOAD_SUCCESS,
    payload: contacts
  };
}

export function contactLoadError() {
  return (dispatch) => {
    dispatch({
      type: CONTACT_LOAD_ERROR
    });
  };
}
