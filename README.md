### Setup
* xFork, Clone, yarn install, yarn start
* xDo Not use the instructions as your guide for what code to type, use the reference guide project (address book)

### Use local api
* http://localhost:4000/products
* http://localhost:4000/contacts
* http://localhost:4000/vehicles
* http://localhost:4000/comments


### Create actions in actions/index.js to retrieve data
* xloadContacts
    * return a thunk function
    * make a fetch call to /contacts
    * in the second then, dispatch to contactsLoaded
* xcontactsLoaded(contacts)
    * return an action
    * type is “CONTACTS_LOADED”
    * value is contacts
* xloadVehicles
    * return a thunk function
    * make a fetch call to /vehicles
    * in the second then, dispatch to vehiclesLoaded
* xvehiclesLoaded(vehicles)
    * return an action
    * type is “VEHICLES_LOADED”
    * value is vehicles
* xloadComments
    * return a thunk function
    * make a fetch call to /comments
    * in the second then, dispatch to commentsLoaded
* xcommentsLoaded(comments)
    * return an action
    * type is “COMMENTS_LOADED”
    * value is comments
* xloadProducts
    * return a thunk function
    * make a fetch call to /products
    * in the second then, dispatch to productsLoaded
* xproductsLoaded(products)
    * return an action
    * type is “PRODUCTS_LOADED”
    * value is products

### Create actions in actions/index.js to create data
* xcreateProduct(product)
   * return a thunk function
   * make a fetch call to /products as a POST
   * include the product in the body
   * in the first then, dispatch to loadProducts

* xcreateContact(contact)
   * return a thunk function
   * make a fetch call to /contacts as a POST
   * include the contact in the body
   * in the first then, dispatch to loadContacts

* xcreateComment(comment)
   * return a thunk function
   * make a fetch call to /comments as a POST
   * include the comment in the body
   * in the first then, dispatch to loadComments

* xcreateVehicle(vehicle)
   * return a thunk function
   * make a fetch call to /vehicles as a POST
   * include the vehicle in the body
   * in the first then, dispatch to loadVehicles

### Create reducers in reducers/index.js
* xCreate reducers based on the state in state.js
* xDetermine which action the reducers should care about
* xreturn the appropriate value

### AppContainer
* In AppContainer.js
* Import connect
* Import actions loadContacts, loadVehicles, loadComments, loadProducts
* mapDispatchToProps for these actions to props of the same name
* Connect and export
* Remember how to use connect when there is no mapStateToProps

### App
* In App.js
* call loadContacts, loadVehicles,loadComments,loadProducts in componentDidMount

### Points
* Base points - 20
* Contacts appear in list - 10
* Vehicles appear in list - 10
* Comments appear in list - 10
* Products appear in list - 10
* Create new contact shows up in list - 10
* Create new vehicle shows up in list - 10
* Create new comment shows up in list - 10
* Create new product shows up in list - 10
