export const loadContacts = () => {
  return function (dispatch) {
    // dispatch({
    //   type: "LOAD_CONTACT"
    // });
    fetch("http://localhost:4001/contacts")
    .then((response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
};

export const contactsLoaded = (contacts) => {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
};

export const loadVehicles = () => {
  return function (dispatch) {
    fetch("http://localhost:4001/vehicles")
    .then((response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
};

export const vehiclesLoaded = (vehicles) => {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
};

export const loadComments = () => {
  return function (dispatch) {
    fetch("http://localhost:4001/comments")
    .then((response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
};

export const commentsLoaded = (comments) => {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
};

export const loadProducts = () => {
  return function (dispatch) {
    fetch("http://localhost:4001/products")
    .then((response) => {
      return response.json();
    }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
};

export const productsLoaded = (products) => {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
};

export const createProduct = (product) => {
  return function (dispatch) {
    fetch("http://localhost:4001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
};

export const createContact = (contact) => {
  return function (dispatch) {
    fetch("http://localhost:4001/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    }).then(() => dispatch(loadContacts()));
  };
};

export const createComment = (comment) => {
  return function (dispatch) {
    fetch("http://localhost:4001/comments", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    }).then(() => dispatch(loadComments()));
  };
};

export const createVehicle = (vehicle) => {
  return function (dispatch) {
    fetch("http://localhost:4001/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vehicle)
    }).then(() => dispatch(loadVehicles()));
  };
};
