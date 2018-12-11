// redux-thunk allows for the code below to work
// returning a function instead of an object

export function loadProducts() {
  return (dispatch) => {
    fetch("/products")
      .then((response) => {
        return response.json();
      }).then((products) => {
        dispatch(productsLoaded(products))
      });
  };
}

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

export function createProduct(product) {
  return (dispatch) => {
    fetch('/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(() => dispatch(loadProducts()));
  }
}

export function loadContacts() {
  return (dispatch) => {
    fetch('/contacts')
      .then(res => {
        return res.json();
      }).then(contacts => {
        dispatch(contactsLoaded(contacts))
      });
  }
}

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function createContact(contact) {
  return (dispatch) => {
    fetch('/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
    })
      .then(() => dispatch(loadContacts()));
  }
}

export function loadVehicles() {
  return (dispatch) => {
    fetch('/vehicles')
      .then(res => {
        return res.json();
      }).then(vehicles => {
        dispatch(vehiclesLoaded(vehicles))
      });
  }
}

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function createVehicle(vehicle) {
  return (dispatch) => {
    fetch('/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehicle)
    })
      .then(() => dispatch(loadVehicles()));
  }
}

export function loadComments() {
  return (dispatch) => {
    fetch('/comments')
      .then(res => {
        return res.json();
      }).then(comments => {
        dispatch(commentsLoaded(comments))
      });
  }
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

export function createComment(comment) {
  return (dispatch) => {
    fetch('/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment)
    })
      .then(() => dispatch(loadComments()));
  }
}