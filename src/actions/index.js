export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";
export const CONTACTS_LOADED = "CONTACTS_LOADED";
export const VEHICLES_LOADED = "VEHICLES_LOADED";
export const PRODUCTS_LOADED = "PRODUCTS_LOADED";
export const COMMENTS_LOADED = "COMMENTS_LOADED";

export function loadContacts() {
  return (dispatch) => {
    dispatch({
      type: CONTACTS_LOADED
    });
    fetch("/contacts")
    .then((contacts) => {
      contacts.json();
    }).then((contacts) => {
      dispatch((contactsLoaded(contacts)));
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function contactsLoaded(contacts) {
  return {
    type: CONTACTS_LOADED,
    contacts
  };
}

export function createContact(contact) {
  return function (dispatch) {
    fetch("/contacts",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    }).then(() => {
      dispatch(loadContacts());
    });
  };
}

export function loadVehicles() {
  return (dispatch) => {
    fetch("/vehicles")
    .then((vehicles) => {
      vehicles.json();
    }).then((vehicles) => {
      dispatch((vehiclesLoaded(vehicles)));
    });
  };
}

export function vehiclesLoaded(vehicles) {
  return {
    type: VEHICLES_LOADED,
    value: vehicles
  };
}


export function loadProducts() {
  return (dispatch) => {
    fetch("/products")
    .then((products) => {
      products.json();
    }).then((products) => {
      dispatch((productsLoaded(products)));
    });
  };
}

export function productsLoaded(products) {
  return {
    type: PRODUCTS_LOADED,
    value: products
  };
}

export function loadComments() {
  return (dispatch) => {
    fetch("/comments")
    .then((comments) => {
      comments.json();
    }).then((comments) => {
      dispatch((commentsLoaded(comments)));
    });
  };
}

export function commentsLoaded(comments) {
  return {
    type: COMMENTS_LOADED,
    value: comments
  };
}
// export function productLoadStart() {
//   return (dispatch) => {
//     dispatch({
//       type: PRODUCT_LOAD_START
//     });
//   };
// }
//
// export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";
//
// export function productLoadSuccess() {
//   return {
//     type: productLoadSuccess,
//     products: []
//   };
// }
//
// export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";
//
// export function productLoadError() {
//   return {
//     type: productLoadError
//   };
// }
