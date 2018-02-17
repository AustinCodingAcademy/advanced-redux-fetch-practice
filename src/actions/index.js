import {connect} from "react-redux";

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

export function loadVehicles(){
  return function(dispatch){
    dispatch({
      type: "LOAD_VEHICLES"
    })
    fetch(`/vehicles`).then((response)=>{
      return response.json()
    }).then((vehicles)=>{
      dispatch(vehiclesLoaded(vehicles))
    });
  }
}

export function vehiclesLoaded(vehicles){
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function loadComments(){
  return function(dispatch){
    dispatch({
      type: "LOAD_COMMENTS"
    })
    fetch(`/comments`).then((response)=>{
      return response.json()
    }).then((comments)=>{
      dispatch(commentsLoaded(comments))
    });
  }
}

export function commentsLoaded(comments){
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

export function loadProducts(){
  return function(dispatch){
    dispatch({
      type: "LOAD_PRODUCTS"
    })
    fetch(`/products`).then((response)=>{
      return response.json()
    }).then((products)=>{
      dispatch(productsLoaded(products))
    });
  }
}

export function productsLoaded(products){
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

export function createProduct(product){
  return function(dispatch){
    dispatch({
      type: "CREATE_PRODUCT"
    })
    fetch(`/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then((product)=>{
      dispatch(loadProducts(product))
    })
  }
}

export function createContact(contact){
  return function(dispatch){
    dispatch({
      type: "CREATE_CONTACT"
    })
    fetch(`/contacts`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    }).then((contact)=>{
      dispatch(loadContacts(contact))
    })
  }
}

export function createComment(comment){
  return function(dispatch){
    dispatch({
      type: "CREATE_COMMENT"
    })
    fetch(`/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    }).then((comment)=>{
      dispatch(loadComments(comment))
    })
  }
}

export function createVehicle(vehicle){
  return function(dispatch){
    dispatch({
      type: "CREATE_VEHICLE"
    })
    fetch(`/vehicles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vehicle)
    }).then((vehicle)=>{
      dispatch(loadVehicles(vehicle))
    })
  }
}
