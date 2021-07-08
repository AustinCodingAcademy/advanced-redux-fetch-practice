export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";
export const CONTACTS_LOADED = "CONTACTS_LOADED";
export const VEHICLES_LOADED = "VEHICLES_LOADED";
export const PRODUCTS_LOADED = "PRODUCTS_LOADED";
export const COMMENTS_LOADED = "COMMENTS_LOADED";
export const LOAD_CONTACTS = "LOAD_CONTACTS";
export const CONTACTS_ERROR = "CONTACTS_ERROR";

export function loadContacts() {
  return (dispatch) => {
    dispatch({
      type: LOAD_CONTACTS
    });
    fetch("/contacts")
    .then((response) => {
      return response.json();
    }).then((contacts) => {
      dispatch((contactsLoaded(contacts)));
    }).catch((err) => {
      dispatch(contactsError(err));
    });
  };
}

export function contactsLoaded(contacts) {
  return {
    type: CONTACTS_LOADED,
    contacts
  };
}

export function contactsError(err) {
  return {
    type: CONTACTS_ERROR,
    err
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
      return vehicles.json();
    }).then((vehicles) => {
      dispatch((vehiclesLoaded(vehicles)));
    });
  };
}

export function createVehicle(vehicle) {
  return function (dispatch) {
    fetch("/vehicles",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(vehicle)
    }).then(() => {
      dispatch(loadVehicles());
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
      return products.json();
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

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => {
      dispatch(loadProducts());
    });
  };
}

export function loadComments() {
  return (dispatch) => {
    fetch("/comments")
    .then((comments) => {
      return comments.json();
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

export function createComment(comment) {
  return function (dispatch) {
    fetch("/comments",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }).then(() => {
      dispatch(loadComments());
    });
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
