export function loadContacts() {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_CONTACTS'
    });
    fetch('/contacts').then(response =>
      response.json().then(contacts => dispatch(contactsLoaded(contacts)))
    );
  };
}
export function contactsLoaded(contacts) {
  return {
    type: 'CONTACTS_LOADED',
    value: contacts
  };
}

export function loadVehicles(vehicles) {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_VEHICLES'
    });
    fetch('/vehicles').then(response =>
      response.json().then(vehicles => dispatch(vehiclesLoaded(vehicles)))
    );
  };
}
export function vehiclesLoaded(vehicles) {
  return {
    type: 'VEHICLES_LOADED',
    value: vehicles
  };
}

export function loadComments(dispatch) {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_COMMENTS'
    });
    fetch('/comments').then(response =>
      response.json().then(comments => dispatch(commentsLoaded(comments)))
    );
  };
}
export function commentsLoaded(comments) {
  return {
    type: 'COMMENTS_LOADED',
    value: comments
  };
}

export function loadProducts(dispatch) {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_PRODUCTS'
    });
    fetch('/products').then(response =>
      response.json().then(products => dispatch(productsLoaded(products)))
    );
  };
}
export function productsLoaded(products) {
  return {
    type: 'PRODUCTS_LOADED',
    value: products
  };
}

export function createProduct(products) {
  return function(dispatch) {
    fetch('/products', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(products)
    }).then(() => dispatch(loadProducts()));
  };
}

export function createComment(comments) {
  return function(dispatch) {
    fetch('/comments', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(comments)
    }).then(() => dispatch(loadComments()));
  };
}

export function createContact(contacts) {
  return function(dispatch) {
    fetch('/contacts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(contacts)
    }).then(() => dispatch(loadContacts()));
  };
}

export function createVehicle(vehicles) {
  return function(dispatch) {
    fetch('/vehicles', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(vehicles)
    }).then(() => dispatch(loadVehicles()));
  };
}
