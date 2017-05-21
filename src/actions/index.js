/*
export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";
// thunk method, uses Middleware in Store.js
// It is not executed right away, but sent to the middleware.
// The middleware identifies it as a thunk, and gives it the dispatch function.
// We get the dispatch function below and dispatch the action inside, PRODUCT_LOAD_START
// The only way to change data inside the store is to dispatch an action
// You can only dispatch actions
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
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export function productLoadSuccess(products) {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    products // (using shorthand) <- products: products
  };
}

*/

export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";

export function productLoadError() {
  return {
    type: PRODUCT_LOAD_ERROR
  };
}

// Assignment starts HERE --------------------------------------------

// Actions to RETRIEVE data ------------------------------------------

export function loadContacts() {
  return (dispatch) => {
    fetch("http://localhost:4001/contacts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(contactsLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export const CONTACTS_LOADED = "CONTACTS_LOADED";

export function contactsLoaded(contacts) {
  return (dispatch) => {
    dispatch({
      type: CONTACTS_LOADED,
      contacts
    });
  };
}

export function loadVehicles() {
  return (dispatch) => {
    fetch("http://localhost:4001/vehicles")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(vehiclesLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export const VEHICLES_LOADED = "VEHICLES_LOADED";

export function vehiclesLoaded(vehicles) {
  return (dispatch) => {
    dispatch({
      type: VEHICLES_LOADED,
      vehicles
    });
  };
}

export function loadComments() {
  return (dispatch) => {
    fetch("http://localhost:4001/comments")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(commentsLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export const COMMENTS_LOADED = "COMMENTS_LOADED";

export function commentsLoaded(comments) {
  return (dispatch) => {
    dispatch({
      type: COMMENTS_LOADED,
      comments
    });
  };
}

export function loadProducts() {
  return (dispatch) => {
    fetch("http://localhost:4001/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(productsLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export const PRODUCTS_LOADED = "PRODUCTS_LOADED";

export function productsLoaded(products) {
  return (dispatch) => {
    dispatch({
      type: PRODUCTS_LOADED,
      products
    });
  };
}

// Actions to CREATE data --------------------------------------------

export function createProduct(product) {
  return (dispatch) => {
    fetch("http://localhost:4001/products", {
      method: "POST",
      body: product
    })
    .then((data) => {
      dispatch(loadProducts(data));
    })
    .then((data) => {
      dispatch(productsLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export function createContact(contact) {
  return (dispatch) => {
    fetch("http://localhost:4001/contacts", {
      method: "POST",
      body: contact
    })
    .then((data) => {
      dispatch(loadContacts(data));
    })
    .then((data) => {
      dispatch(contactsLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export function createComment(comment) {
  return (dispatch) => {
    fetch("http://localhost:4001/comments", {
      method: "POST",
      body: comment
    })
    .then((data) => {
      dispatch(loadComments(data));
    })
    .then((data) => {
      dispatch(commentsLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}

export function createVehicle(vehicle) {
  return (dispatch) => {
    fetch("http://localhost:4001/vehicles", {
      method: "POST",
      body: vehicle
    })
    .then((data) => {
      dispatch(loadVehicles(data));
    })
    .then((data) => {
      dispatch(vehiclesLoaded(data));
    })
    .catch(() => {
      dispatch(productLoadError());
    });
  };
}
