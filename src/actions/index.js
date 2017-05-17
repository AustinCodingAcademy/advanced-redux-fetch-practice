export function loadContacts() {
  return function (dispatch) {
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
  };
}

export function loadVechicles() {
  return function (dispatch) {
    fetch("/vechicles")
     .then( (response) => {
       return response.json();
     }).then((vechicles) => {
       dispatch(vechiclesLoaded(vechicles));
     });
  };
}

export function vechiclesLoaded(vechicles) {
  return {
    type: "VECHICLES_LOADED",
    value: vechicles
  };
}


export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
     .then( (response) => {
       return response.json();
     }).then((comments) => {
       dispatch(commentsLoaded(comments));
     });
  };
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
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
    type: "PRODUCTS_LOADED",
    value: products
  };
}
