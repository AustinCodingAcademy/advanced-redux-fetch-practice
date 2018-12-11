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
   