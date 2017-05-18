
export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";
export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";
export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";


export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch("http://localhost:4001/products")
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
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_SUCCESS
    });
  };
}

export function productLoadError() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_ERROR
    });
  };
}
