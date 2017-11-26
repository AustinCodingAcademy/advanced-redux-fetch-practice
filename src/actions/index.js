//LOAD CONTACTS
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
//CREATE CONTACT
export function createContact(contact) {
    return function(dispatch) {
        fetch("/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        .then( (response) => {
            dispatch(loadContacts());
        });
    }
}



//LOAD PRODUCTS
export function loadProducts() {
    return function (dispatch) {
        dispatch({
            type: "LOAD_PRODUCTS"
        });
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
//CREATE PRODUCT
export function createProduct(product) {
    return function(dispatch) {
        fetch("/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then( (response) => {
            dispatch(loadProducts());
        });
    }
}



//LOAD VEHICLES
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
//CREATE VEHICLE
export function createVehicle(vehicle) {
    return function(dispatch) {
        fetch("/vehicles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vehicle)
        })
        .then( (response) => {
            dispatch(loadVehicles());
        });
    }
}



//LOAD COMMENTS
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
//CREATE COMMENT
export function createComment(comment) {
    return function(dispatch) {
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then( (response) => {
            dispatch(loadComments());
        });
    }
}