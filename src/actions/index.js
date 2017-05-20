export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

//  PRODUCTS

// create product

export const PRODUCT_CREATE_START = "PRODUCT_CREATE_START";

export function createProduct(product) {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_CREATE_START,
      product
    });

    fetch("http://localhost:4001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application.json"
      },
      body: JSON.stringify(product)
    })
    .then(() => dispatch(productLoadStart()));
  };
}

export function productLoadStart() {
  return (dispatch) => {

    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch("http://localhost:4001/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(productLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(productLoadFailure("Error:", err));
      });
  };
}

export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export function productLoadSuccess(products) {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    products
  };
}

export const PRODUCT_LOAD_FAILURE = "PRODUCT_LOAD_FAILURE";

export function productLoadFailure() {
  return {
    type: PRODUCT_LOAD_FAILURE
  };
}

// CONTACTS

export const CONTACTS_LOAD_START = "CONTACTS_LOAD_START";

export function contactsLoadStart() {
  return (dispatch) => {

    dispatch({
      type: CONTACTS_LOAD_START
    });

    fetch("http://localhost:4001/contacts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(contactsLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(contactsLoadFailure("Error", err));
      });
  };
}

export const CONTACTS_LOAD_SUCCESS = "CONTACTS_LOAD_SUCCESS";

export function contactsLoadSuccess(contacts) {
  return {
    type: CONTACTS_LOAD_SUCCESS,
    contacts
  };
}

export const CONTACTS_LOAD_FAILURE = "CONTACTS_LOAD_FAILURE";

export function contactsLoadFailure() {
  return {
    type: CONTACTS_LOAD_FAILURE
  };
}

// VEHICLES

export const VEHICLES_LOAD_START = "VEHICLES_LOAD_START";

export function vehiclesLoadStart() {
  return (dispatch) => {

    dispatch({
      type: VEHICLES_LOAD_START
    });

    fetch("http://localhost:4001/vehicles")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(vehiclesLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(vehiclesLoadFailure("Error", err));
      });
  };
}

export const VEHICLES_LOAD_SUCCESS = "VEHICLES_LOAD_SUCCESS";

export function vehiclesLoadSuccess(vehicles) {
  return {
    type: VEHICLES_LOAD_SUCCESS,
    vehicles
  };
}

export const VEHICLES_LOAD_FAILURE = "VEHICLES_LOAD_FAILURE";

export function vehiclesLoadFailure() {
  return {
    type: VEHICLES_LOAD_SUCCESS
  };
}

//  COMMENTS

export const COMMENTS_LOAD_START = "COMMENTS_LOAD_START";

export function commentsLoadStart() {
  return (dispatch) => {

    dispatch({
      type: COMMENTS_LOAD_START
    });

    fetch("http://localhost:4001/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(commentsLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(commentsLoadFailure("Error", err));
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

export const COMMENTS_LOAD_FAILURE = "COMMENTS_LOAD_FAILURE";

export function commentsLoadFailure() {
  return {
    type: COMMENTS_LOAD_SUCCESS
  };
}
