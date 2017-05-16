export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch("http://localhost:4001/products").then((response) => {
      console.log("execute this when the data is received", response);
      return response.json();
    })
    .then((data) => {
      dispatch(productLoadSucess(data));
    })
    .catch((err) => {
      dispatch(productLoadError());
      console.log("oops, error");
    });
  };
}



export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCESS";

export function productLoadSucess(products) {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    products: []
  };
}

export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";

export function productLoadError() {
  return {
    type: PRODUCT_LOAD_ERROR,
    message: ""
  };
}
