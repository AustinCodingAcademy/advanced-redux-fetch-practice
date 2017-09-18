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
      type: "COMMENTS_LOADED",
      value: comments
    };
}

export function loadProducts() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_PRODUCTS"
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
      type: "PRODUCTS_LOADED",
      value: products
    };
}

// CREATE FUNCTIONS

function createProduct(product) {
    return function (dispatch) {
        fetch("/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
        })
        .then( (response) => {
            return response.json();
            // no argument needed below because Mama Bear fnc doesn't have one
        }).then(() => {
            dispatch(loadProducts());
        // no semicolon above for end of fetch here
        });
    };
}  

function createContact(contact) {
    return function (dispatch) {
        fetch("/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
        })
        .then( (response) => {
            return response.json();
        }).then(() => {
            dispatch(loadContacts());
        });
    };
} 

function createComment(comment) {
    return function (dispatch) {
        fetch("/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
        })
        .then( (response) => {
            return response.json();
        }).then(() => {
            dispatch(loadComments());
        });
    };
}  

function createVehicle(vehicle) {
    return function (dispatch) {
        fetch("/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vehicle)
        })
        .then( (response) => {
            return response.json();
        }).then(() => {
            dispatch(loadVehicles());
        });
    };
} 