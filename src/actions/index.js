

export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });
    fetch("http://localhost:4001/products").then((response) => {
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
  return {
    type: PRODUCT_LOAD_ERROR,
    message: "Loading Error"
  };
}


export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export function productLoadSuccess(products) {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    products
  };
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

export function contactsLoadSuccess(contacts) {
  return {
    type: CONTACTS_LOAD_SUCCESS,
    contacts
  };
}

export const CONTACTS_LOAD_ERROR = "CONTACTS_LOAD_ERROR";

export function contactsLoadError() {
  return {
    type: CONTACTS_LOAD_ERROR,
    message: "Loading Error"
  };
}


// Comments section

export const COMMENTS_LOAD_START = "COMMENTS_LOAD_START";

export function commentsLoadStart() {
  return (dispatch) => {
    dispatch({
      type: COMMENTS_LOAD_START
    });
    fetch("http://localhost:4001/comments").then((response) => {
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

export function commentsLoadSuccess(comments) {
  return {
    type: COMMENTS_LOAD_SUCCESS,
    comments
  };
}

export const COMMENTS_LOAD_ERROR = "COMMENTS_LOAD_ERROR";

export function commentsLoadError() {
  return {
    type: COMMENTS_LOAD_ERROR,
    message: "Loading Error"
  };
}




// vehicles section

export const VEHICLES_LOAD_START = "VEHICLES_LOAD_START";

export function vehiclesLoadStart() {
  return (dispatch) => {
    dispatch({
      type: VEHICLES_LOAD_START
    });
    fetch("http://localhost:4001/vehicles").then((response) => {
      return response.json();
    }).then((data) => {
      dispatch(vehiclesLoadSuccess(data));
    })
    .catch(() => {
      dispatch(vehiclesLoadError());
    });
  };
}

export const VEHICLE_LOAD_SUCCESS = "VEHICLE_LOAD_SUCCESS";

export function vehiclesLoadSuccess(vehicles) {
  return {
    type: VEHICLE_LOAD_SUCCESS,
    vehicles
  };
}

export const VEHICLE_LOAD_ERROR = "VEHICLE_LOAD_ERROR";

export function vehiclesLoadError() {
  return {
    type: VEHICLE_LOAD_ERROR,
    message: "Loading Error"
  };
}
