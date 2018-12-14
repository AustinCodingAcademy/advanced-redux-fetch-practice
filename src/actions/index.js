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

export function loadContacts(){
  return function (dispatch){
    fetch("/contacts")
    .then((response)=>{
      return response.json();
    }).then((contacts)=>{
      dispatch(contactsLoaded(contacts));
    });
  };
}

export function contactsLoaded(contacts){
  return{
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function loadVehicles(){
  return function (dispatch){
    fetch("/vehicles")
    .then((response)=>{
      return response.json();
    }).then((vehicles)=>{
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}

export function vehiclesLoaded(vehicles){
  return{
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function loadComments(){
  return function (dispatch){
    fetch("/comments")
    .then((response)=>{
      return response.json();
    }).then((comments)=>{
      dispatch(commentsLoaded(comments));
    });
  };
}

export function commentsLoaded(comments){
  return{
    type: "COMMENTS_LOADED",
    value: comments
  };
}