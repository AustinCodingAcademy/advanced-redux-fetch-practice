

// load contacts
export function loadContacts() {
 return function (dispatch) {
   dispatch({
     type: "LOAD_CONTACTS"
   });
   fetch("/contacts")
   .then( (response) => {
     return response.json();
   }).then((contacts) => {
     dispatch(contactsLoaded(contacts));
   });
 };
}
export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  }
}

// load vehicles
export function loadVehicles () {
  return function (dispatch) {
  fetch('/vehicles')
  .then( (response) => {
    return response.json();
  }).then ((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  }
}

// load comments
export function loadComments () {
  return function (dispatch) {
  fetch('/comments')
  .then( (response) => {
    return response.json();
  }).then ((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
}
export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  }
}

// load products
export function loadProducts () {
  return function (dispatch) {
  fetch('/products')
  .then( (response) => {
    return response.json();
  }).then ((products) => {
      dispatch(productsLoaded(products));
    });
  };
}
export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  }
}

// create products
export function createProduct(product) {
 return function (dispatch) {
   fetch("/products", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(product)
   }).then(() => dispatch(loadProducts()));
 };
}

// create contacts
export function createContact(contact) {
 return function (dispatch) {
   fetch("/contacts", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(contact)
   }).then(() => dispatch(loadContacts()));
 };
}


// create comments
export function createComment(comment) {
 return function (dispatch) {
   fetch("/comments", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(comment)
   }).then(() => dispatch(loadComments()));
 };
}

// create vehicles
export function createVehicle(vehicle) {
 return function (dispatch) {
   fetch("/vehicles", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(vehicle)
   }).then(() => dispatch(loadVehicles()));
 };
}
