export function createContact(contact) {
  return (dispatch) => {
    fetch('/contacts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(contact)
    })
    .then(() => dispatch(loadContacts));
  }
}

export function loadContacts() {
  return (dispatch) => {
    dispatch({type: "LOAD_CONTACTS"});

    fetch("/contacts")
    .then(res => res.json())
    .then(json => dispatch(contactsLoaded(json)))
    .catch(err => console.log(err));
  }
}

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  }
}

export function createVehicle(vehicle) {
  return (dispatch) => {
    fetch('/vehicles', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(vehicle)
    })
    .then(() => dispatch(loadVehicles));
  }
}

export function loadVehicles() {
  return (dispatch) => {
    dispatch({type: "LOAD_VEHICLES"});

    fetch('/vehicles')
    .then(res => res.json())
    .then(json => dispatch(vehiclesLoaded(json)))
    .catch(err => console.log(err));
  } 
}

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  }
}

export function createComment(comment) {
  return (dispatch) => {
    fetch('/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
    })
    .then(() => dispatch(loadComments));
  }
}

export function loadComments() {
  return (dispatch) => {
    dispatch({type: "LOAD_CONTACTS"});

    fetch('/comments')
    .then(res => res.json())
    .then(json => dispatch(contactsLoaded(json)))
    .catch(err => console.log(err));
  }
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  }
}

export function createProduct(product) {
  return (dispatch) => {
    fetch('/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(product)
    })
    .then(() => dispatch(loadProducts));
  }
}

export function loadProducts() {
  return (dispatch) => {
    dispatch({type: "LOAD_PRODUCTS"});

    fetch('/products')
    .then(res => res.json())
    .then(json => dispatch(productsLoaded(json)))
    .catch(err => console.log(err));
  }
}

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  }
}

