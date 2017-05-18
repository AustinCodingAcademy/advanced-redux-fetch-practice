/* Load contacts with fetch */

function loadContactsWithFetch(dispatch) {
  dispatch({
    type: "LOAD_CONTACTS"
  });

  fetch("/contacts")
  .then( (response) => {
    return response.json();
  }).then((contacts) => {
    dispatch(contactsLoaded(contacts));
  }).catch(() => {
    dispatch(contactsLoadError());
  });
}

export const CONTACTS_LOAD_ERROR = "CONTACTS_LOAD_ERROR";
export function contactsLoadError() {
  return {
    type: CONTACTS_LOAD_ERROR,
    message: "Loading Error"
  };
}

export function loadContacts() {
  return loadContactsWithFetch;
}

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

/* load vehicles with fetch */

function loadVehiclesWithFetch(dispatch) {
  dispatch({
    type: "LOAD_VEHICLES"
  });

  fetch("/vehicles")
  .then( (response) => {
    return response.json();
  }).then((vehicles) => {
    dispatch(vehiclesLoaded(vehicles));
  }).catch(() => {
    dispatch(vehicleLoadError());
  });
}

export const VEHICLE_LOAD_ERROR = "VEHICLE_LOAD_ERROR";
export function vehicleLoadError() {
  return {
    type: VEHICLE_LOAD_ERROR,
    message: "Loading Error"
  };
}

export function loadVehicles() {
  return loadVehiclesWithFetch;
}

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

/* load comments with fetch */

function loadCommentsWithFetch(dispatch) {
  dispatch({
    type: "LOAD_COMMENTS"
  });

  fetch("/comments")
  .then( (response) => {
    return response.json();
  }).then((comments) => {
    dispatch(commentsLoaded(comments));
  }).catch(() => {
    dispatch(commentsLoadError());
  });
}

export const COMMENTS_LOAD_ERROR = "COMMENTS_LOAD_ERROR";
export function commentsLoadError() {
  return {
    type: COMMENTS_LOAD_ERROR,
    message: "Loading Error"
  };
}

export function loadComments() {
  return loadCommentsWithFetch;
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

/* load products with fetch */

function loadProductsWithFetch(dispatch) {
  dispatch({
    type: "LOAD_PRODUCTS"
  });

  fetch("/products")
  .then( (response) => {
    return response.json();
  }).then((products) => {
    dispatch(productsLoaded(products));
  }).catch(() => {
    dispatch(productLoadError());
  });
}

export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";
export function productLoadError() {
  return {
    type: PRODUCT_LOAD_ERROR,
    message: "Loading Error"
  };
}

export function loadProducts() {
  return loadProductsWithFetch;
}

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}

export function createContact(contact) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    }).then(() => dispatch(loadContacts()));
  };
}

export function createComment(comment) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }).then(() => dispatch(loadComments()));
  };
}

export function createVehicle(vehicle) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(vehicle)
    }).then(() => dispatch(loadVehicles()));
  };
}
