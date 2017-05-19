export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

//  PRODUCTS

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
        dispatch(productLoadFailure("Error", err));
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
