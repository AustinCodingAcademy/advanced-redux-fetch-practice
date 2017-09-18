// LOAD FUNCTIONS
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
    };
}

export function loadVehicles() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_VEHICLES"
      });
  
      fetch("/vehicles")
      .then( (response) => {
        return response.json();
      }).then((vehicles) => {
        dispatch(vehiclesLoaded(vehicles));
      });
    };
}

export function vehiclesLoaded(vehicles) {
    return {
      type: "VEHICLES_LOADED",
      value: vehicles
    };
}

export function loadComments() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_COMMENTS"
      });
  
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
      type: "COMMENT_LOADED",
      value: comments
    };
}

export function loadProducts() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_COMMENTS"
      });
  
      fetch("/comments")
      .then( (response) => {
        return response.json();
      }).then((products) => {
        dispatch(productsLoaded(products));
      });
    };
}

export function productsLoaded(products) {
    return {
      type: "PRODUCT_LOADED",
      value: products
    };
}

// CREATE FUNCTIONS
// export function loadProducts() {
//     return function (dispatch) {
//       dispatch({
//         type: "LOAD_COMMENTS"
//       });
  
//       fetch("/comments")
//       .then( (response) => {
//         return response.json();
//       }).then((products) => {
//         dispatch(productsLoaded(products));
//       });
//     };
// }

// export function productsLoaded(products) {
//     return {
//       type: "PRODUCT_LOADED",
//       value: products
//     };
// }



// function createContact(contact) {
//     return fetch("/contacts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(contact)
//     });
//   }
  
//   export default createContact;
  