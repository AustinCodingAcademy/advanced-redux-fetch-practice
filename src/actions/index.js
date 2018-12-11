// loadContacts
export function loadContacts() {
    // return a thunk function
    return function (dispatch) {
        // make a fetch call to /contacts
        fetch("/contacts")
        .then( (response) => {
            return response.json();
            // in the second then, dispatch to contactsLoaded
        }).then((contacts) => {
            // contactsLoaded(contacts)
            dispatch(contactsLoaded(contacts));
        });
    };
}

// return an action
export function contactsLoaded(contacts) {
    return {
        // type is “CONTACTS_LOADED”
        type: "CONTACTS_LOADED",
        // value is contacts
        value: contacts
    };
}
   
// loadVehicles
// return a thunk function
// make a fetch call to /vehicles
// in the second then, dispatch to vehiclesLoaded
// vehiclesLoaded(vehicles)
// return an action
// type is “VEHICLES_LOADED”
// value is vehicles

export function loadVehicles() {
    return function (dispatch) {
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



// loadComments
// return a thunk function
// make a fetch call to /comments
// in the second then, dispatch to commentsLoaded
// commentsLoaded(comments)
// return an action
// type is “COMMENTS_LOADED”
// value is comments

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


// loadProducts
// return a thunk function
// make a fetch call to /products
// in the second then, dispatch to productsLoaded
// productsLoaded(products)
// return an action
// type is “PRODUCTS_LOADED”
// value is products

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



// Create actions in actions/index.js to create data


// createProduct(product)
export function createProduct(product) {
    // return a thunk function
    return function (dispatch) {
        // make a fetch call to /products as a POST
        // include the product in the body
        fetch("/products", {
            method:"POST",  
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)})
        // in the first then, dispatch to loadProducts
        .then(() => {
            dispatch(loadProducts());
        });
    };
}





// createContact(contact)
// return a thunk function
// make a fetch call to /contacts as a POST
// include the contact in the body
// in the first then, dispatch to loadContacts



export function createContact(contact) {
    return function (dispatch) {
        fetch("/contacts", {
            method:"POST",  
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contact)})
        .then(() => {
            dispatch(loadContacts());
        });
    };
}


// createComment(comment)
// return a thunk function
// make a fetch call to /comments as a POST
// include the comment in the body
// in the first then, dispatch to loadComments


export function createComment(comment) {
    return function (dispatch) {
        fetch("/comments", {
            method:"POST",  
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comment)})
        .then(() => {
            dispatch(loadComments());
        });
    };
}

// createVehicle(vehicle)
// return a thunk function
// make a fetch call to /vehicles as a POST
// include the vehicle in the body
// in the first then, dispatch to loadVehicles

export function createVehicle(vehicle) {
    return function (dispatch) {
        fetch("/vehicles", {
            method:"POST",  
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(vehicle)})
        .then(() => {
            dispatch(loadVehicles());
        });
    };
}