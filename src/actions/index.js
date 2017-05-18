export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });
    fetch("http://localhost:4001/products")
    .then((response) => {
      console.log("execute when loaded");
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("this is the date from products", data);
      dispatch(productLoadSuccess(data));
    }).catch((err) => {
      dispatch(productLoadFailure());
      console.log("Oops, an error happened.", err);
    });
  };
}

/*
fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "same-origin"
}).then(function(response) {
  response.status     //=> number 100–599
  response.statusText //=> String
  response.headers    //=> Headers
  response.url        //=> String

  return response.text()
}, function(error) {
  error.message //=> String
})
*/

export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export function productLoadSuccess() {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    products: []
  };
}

export const PRODUCT_LOAD_FAILURE = "PRODUCT_LOAD_FAILURE";

export function productLoadFailure() {
  return {
    type: PRODUCT_LOAD_FAILURE
  };
}
