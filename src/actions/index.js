
export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch('http://localhost:4001/products')
      .then((response) => {
        console.log("Execute this when data is retrieved inside thunk", response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(productLoadSuccess(data));
      })
      .catch((err) => {
        console.log("Error inside thunk", err);
      });
  };
}

export function productLoadSuccess(products) {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    products
  };
}

export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

// export function PRODUCT_LOAD_ERROR(){
//   return {
//     type: PRODUCT_LOAD_ERROR
//   }
// }
//
// export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";



//
//
//
//   // fetch('/users.json')
//   // .then(function(response) {
//   //   return response.json()
//   // }).then(function(json) {
//   //   console.log('parsed json', json)
//   // }).catch(function(ex) {
//   //   console.log('parsing failed', ex)
//   // })
