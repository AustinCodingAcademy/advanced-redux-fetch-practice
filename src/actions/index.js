
//2 actions for every fetch when using thunk
export function loadProducts() {
    return function (dispatch) {
      fetch("/products")
      .then( (response) => {
        return response.json();
      }).then((users) => {
        dispatch(productsLoaded(users));
      });
    };
   }
   export function productsLoaded(products) {
    return {
      type: "PRODUCTS_LOADED",
      value: products
    };
   }
   export function loadComments() {
    return function (dispatch) {
      fetch("/comments")
      .then( (response) => {
        return response.json();
      }).then((users) => {
        dispatch(commentsLoaded(users));
      });
    };
   }
   export function commentsLoaded(comments) {
    return {
      type: "COMMENTS_LOADED",
      value: comments
    };
   } 
   export function loadContacts() {
    return function (dispatch) {
      fetch("/contacts")
      .then( (response) => {
        return response.json();
      }).then((users) => {
        dispatch(contactsLoaded(users));
      });
    };
   }
   export function contactsLoaded(contacts) {
    return {
      type: "CONTACTS_LOADED",
      value: contacts
    };
   }
   export function loadVehicles() {
    return function (dispatch) {
      fetch("/vehicles")
      .then( (response) => {
        return response.json();
      }).then((users) => {
        dispatch(vehiclesLoaded(users));
      });
    };
   }
   export function vehiclesLoaded(vehicles) {
    return {
      type: "VEHICLES_LOADED",
      value: vehicles
    };
   }          
   