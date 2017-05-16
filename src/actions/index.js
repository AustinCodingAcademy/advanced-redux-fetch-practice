
export function productLoadStart()

fetch(http:localhost:4001/products)
  .then((response) => {
    console.log('Execute when data retrevied', response);
  })



  // fetch('/users.json')
  // .then(function(response) {
  //   return response.json()
  // }).then(function(json) {
  //   console.log('parsed json', json)
  // }).catch(function(ex) {
  //   console.log('parsing failed', ex)
  // })
