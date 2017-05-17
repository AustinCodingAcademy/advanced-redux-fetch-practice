

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
  return function thunk () {
    // url (required), options (optional)
  fetch('/comments', {
    method: 'get'
  }).then(function(response) {
    return (dispatch) => {
      dispatch(commentsLoaded(response.data));
    }
  }).catch(function(err) {
    // Error :(
  });
  }
}
export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  }
}

// load products
export function loadProducts () {
  return function thunk () {
    // url (required), options (optional)
  fetch('/products', {
    method: 'get'
  }).then(function(response) {
    return (dispatch) => {
      dispatch(productsLoaded(response.data));
    }
  }).catch(function(err) {
    // Error :(
  });
  }
}
export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  }
}

// create products
export function createProduct (product) {
//use slide 20
}

// create contacts
export function createContact (contact) {
  return function thunk () {
    // url (required), options (optional)
  fetch('/contacts', {
    method: 'POST'
  }).then(function(response) {
    return (dispatch) => {
      dispatch(loadContacts());
    }
  }).catch(function(err) {
    // Error :(
  });
  }
}

// create comments
export function createComment (comment) {
  return function thunk () {
    // url (required), options (optional)
  fetch('/comments', {
    method: 'POST'
  }).then(function(response) {
    return (dispatch) => {
      dispatch(loadComments());
    }
  }).catch(function(err) {
    // Error :(
  });
  }
}

// create vehicles
export function createVehicle (vehicle) {
  return function thunk () {
    // url (required), options (optional)
  fetch('/vehicles', {
    method: 'POST'
  }).then(function(response) {
    return (dispatch) => {
      dispatch(loadVehicles());
    }
  }).catch(function(err) {
    // Error :(
  });
  }
}
