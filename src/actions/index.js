export function loadContacts (contacts) {
  return function (dispatch){
    fetch("/contacts")
    .then((response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
}

export function contactsLoaded(contacts) {
  return {
    type:"CONTACTS_LOADED",
    value:contacts
  }
}

export function loadVehicles(vehicles){
  return function (dispatch){
    fetch("vehicles")
    .then((response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}

export function vehiclesLoaded(vehicles) {
  return {
    type:"VEHICLES_LOADED",
    value:vehicles
  }
}

export function loadComments(comments) {
  return function (dispatch) {
    fetch("/comments")
    .then((response) => {
    return response.json();
  }).then((comments) => {
    dispatch(commentsLoaded(comments));
  });
 };
}

export function commentsLoaded(comments){
  return {
    type:"COMMENTS_LOADED",
    value:comments
  }
}

export function loadProducts() {
  return function (dispatch) {
    fetch("/products")
    .then( (response) => {
      return response.json();
  }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
}

export function productsLoaded(products) {
  return {
    type:"PRODUCTS_LOADED",
    value:products
  }
}

export function createProduct(products) {
  return function (dispatch) {
    fetch("/products", {
      method:"POST",
      headers: {
   "Content-Type": "application/json"
 },
      body: JSON.stringify(products)
    }).then((products) => {
      dispatch(loadProducts(products));
    });
  };
}

export function createContact(contact) {
  return function(dispatch) {
    fetch("/contacts", {
      method:"POST",
      headers: {
   "Content-Type": "application/json"
 },
      body: JSON.stringify(contact)
    }).then((contact) => {
      dispatch(loadContacts(contact));
    });
  };
}

export function createComment(comment) {
  return function(dispatch) {
    fetch("/comments", {
      method:"POST",
      headers: {
   "Content-Type": "application/json"
 },
      body:JSON.stringify(comment)
    }).then((comment) => {
      dispatch(loadComments(comment));
    });
  };
}

export function createVehicle(vehicle) {
  return function(dispatch) {
    fetch("/vehicles", {
      method:"POST",
      headers: {
   "Content-Type": "application/json"
 },
      body:JSON.stringify(vehicle)
    }).then((vehicle) => {
      dispatch(loadVehicles(vehicle));
    });
  };
}
