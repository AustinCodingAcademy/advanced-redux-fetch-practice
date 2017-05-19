export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

export function productLoadStart() {
  return (dispatch) => {

    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch("http://localhost:4001/products")
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        dispatch(productLoadSuccess(products));
      })
      .catch((err) => {
        dispatch(productLoadFailure("Error", err));
      });
  };
}

export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export function productLoadSuccess(products) {
  return {
    type: PRODUCT_LOAD_SUCCESS,
    products
  };
}
