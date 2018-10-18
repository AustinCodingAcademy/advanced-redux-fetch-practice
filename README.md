### Setup
* Fork, Clone, npm install, npm start


### Use local api
* http://localhost:4001/products
* http://localhost:4001/contacts
* http://localhost:4001/vehicles
* http://localhost:4001/comments


### Create actions in actions/index.js to retrieve data
ALMOST DONE* loadContacts -  (check on Type though...)
    * return a thunk function
    * make a fetch call to /contacts
    * in the second then, dispatch to contactsLoaded
DONE * contactsLoaded(contacts)
    * return an action
    * type is “CONTACTS_LOADED”
    * value is contacts
DONE * loadVehicles
    * return a thunk function
    * make a fetch call to /vehicles
    * in the second then, dispatch to vehiclesLoaded
DONE * vehiclesLoaded(vehicles)
    * return an action
    * type is “VEHICLES_LOADED”
    * value is vehicles
DONE * loadComments
    * return a thunk function
    * make a fetch call to /comments
    * in the second then, dispatch to commentsLoaded
DONE * commentsLoaded(comments)
    * return an action
    * type is “COMMENTS_LOADED”
    * value is comments
DONE * loadProducts
    * return a thunk function
    * make a fetch call to /products
    * in the second then, dispatch to productsLoaded
DONE * productsLoaded(products)
    * return an action
    * type is “PRODUCTS_LOADED”
    * value is products

### Create actions in actions/index.js to create data
DONE * createProduct(product)
   * return a thunk function
   * make a fetch call to /products as a POST
   * include the product in the body 
   * in the first then, dispatch to loadProducts

DONE * createContact(contact)
   * return a thunk function
   * make a fetch call to /contacts as a POST
   * include the contact in the body 
   * in the first then, dispatch to loadContacts

DONE * createComment(comment)
   * return a thunk function
   * make a fetch call to /comments as a POST
   * include the comment in the body 
   * in the first then, dispatch to loadComments

DONE * createVehicle(vehicle)
   * return a thunk function
   * make a fetch call to /vehicles as a POST
   * include the vehicle in the body 
   * in the first then, dispatch to loadVehicles

### Create reducers in reducers/index.js
DONE * Create reducers based on the state in state.js
DONE * Determine which action the reducers should care about 
DONE * return the appropriate value

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



