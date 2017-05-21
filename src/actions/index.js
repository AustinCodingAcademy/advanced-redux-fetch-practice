export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

export function productLoadStart() {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_LOAD_START
    });
  };
}

export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export function productLoadSuccess() {
  return {
    type: productLoadSuccess,
    products: []
  };
}

export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";

export function productLoadError() {
  return {
    type: productLoadError
  };
}
