

export function loadContacts() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_CONTACTS"
    });
    fetch("/Contacts").then((res) => {
      return res.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
};

export function contactsLoaded(contacts) {
  return{
    type: "CONTACTS_LOADED",
    value: contacts
  };
};

export function loadVehicles() {
  return function (dispatch) {
    dispatch ({
      type: "LOAD_VEHICLES"
    });
    fetch("/Vehicles").then((res) => {
      return res.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
};

export function vehiclesLoaded(vehicles) {
  return{
    type: "VEHICLES_LOADED",
    value: vehicles
  };
};

export function loadComments() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_COMMENTS"
    });
    fetch('/Comments').then((res) => {
      return res.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
};

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
};

export function loadProducts() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_PRODUCTS"
    });
    fetch("/Products").then((res) => {
      return res.json();
    }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
};

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
};

export function createProduct(product) {
  return function (dispatch) {
    fetch("/Products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
};

export function createContact(contact) {
  return function (dispatch) {
    fetch("/Contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    }).then(() => dispatch(loadContacts()));
  };
};

export function createComment(comment) {
  return function (dispatch) {
    fetch("/Comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }).then(() => dispatch(loadComments()));
  };
};

export function createVehicle(vehicle) {
  return function (dispatch) {
    fetch("/Vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(vehicle)
    }).then(() => dispatch(loadVehicles()));
  };
};
