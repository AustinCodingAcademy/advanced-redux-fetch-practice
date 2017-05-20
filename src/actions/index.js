
export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";
export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";
export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";
export const COMMENT_LOAD_START = "COMMENT_LOAD_START";
export const COMMENT_LOAD_ERROR = "COMMENT_LOAD_ERROR";
export const COMMENT_LOAD_SUCCESS = "COMMENT_LOAD_SUCCESS";
export const VEHICLE_LOAD_START = "VEHICLE_LOAD_START";
export const VEHICLE_LOAD_ERROR = "VEHICLE_LOAD_ERROR";
export const VEHICLE_LOAD_SUCCESS = "VEHICLE_LOAD_SUCCESS";
export const CONTACT_LOAD_START = "CONTACT_LOAD_START";
export const CONTACT_LOAD_ERROR = "CONTACT_LOAD_ERROR";
export const CONTACT_LOAD_SUCCESS = "CONTACT_LOAD_SUCCESS";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch("http://localhost:4001/products")
      .then((response) => {
        // console.log("Execute this when data is retrieved inside thunk", response);
        return response.json();
      })
      .then((data) => {
        // console.log("Then Log", data);
        dispatch(productLoadSuccess(data));
      })
      .catch((err) => {
        // console.log("Error inside thunk", err);
      });
  };
}

export function productLoadSuccess(products) {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    payload: products
  };
}

export function productLoadError() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_ERROR
    });
  };
}

export function commentLoadStart() {
  return (dispatch) => {
    dispatch({
      type: COMMENT_LOAD_START
    });

    fetch("http://localhost:4001/comments")
      .then((response) => {
        // console.log("Execute this when data is retrieved inside thunk", response);
        return response.json();
      })
      .then((data) => {
        // console.log("Comments Then Log", data);
        dispatch(commentLoadSuccess(data));
      })
      .catch((err) => {
        // console.log("Error inside comment thunk", err);
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

export function vehicleLoadStart(vehicles){
  return (dispatch) => {
    dispatch({
      type: VEHICLE_LOAD_START
    });

    fetch("http://localhost:4001/vehicles")
      .then((response) => {
        console.log("Execute this when data is retrieved inside vehicle thunk", response);
        return response.json();
      })
      .then((data) => {
        console.log("Vehicle Then Log", data);
        dispatch(vehicleLoadSuccess(data));
      })
      .catch((err) => {
        console.log("Error inside vehicle thunk", err);
      });
  };
}

export function vehicleLoadSuccess(vehicles) {
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

export function contactLoadStart(contacts){
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
