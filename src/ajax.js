import "whatwg-fetch";

fetch('http://localhost:4000/products').then((response) => {
  console.log('Execute this when data is retrieved', response);
});
  
