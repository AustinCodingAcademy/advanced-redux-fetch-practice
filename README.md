### Setup
* Fork, Clone, yarn install, yarn start
* Do Not use the instructions as your guide for what code to type, use the checklist

### Use local api
* http://localhost:4001/products
* http://localhost:4001/contacts
* http://localhost:4001/vehicles
* http://localhost:4001/comments


### Create actions in actions/index.js to retrieve data
* loadContacts
    X return a thunk function
    X make a fetch call to /contacts
  X in the second then, dispatch to contactsLoaded

* contactsLoaded(contacts)
    X return an action
    X type is “CONTACTS_LOADED”
    X value is contacts

* loadVehicles
    X return a thunk function
    X make a fetch call to /vehicles
    X in the second then,
    dispatch to vehiclesLoaded

* vehiclesLoaded(vehicles)
    X return an action
    X type is “VEHICLES_LOADED”
    X value is vehicles

* loadComments
    X return a thunk function
    X make a fetch call to /comments
    X in the second then, dispatch to commentsLoaded

* commentsLoaded(comments)
    X return an action
    X type is “COMMENTS_LOADED”
    X value is comments

* loadProducts
    X return a thunk function
    X make a fetch call to /products
    X in the second then, dispatch to productsLoaded

* productsLoaded(products)
    X return an action
    X type is “PRODUCTS_LOADED”
    X value is products

### Create actions in actions/index.js to create data
X createProduct(product)
  X return a thunk function
  X make a fetch call to /products as a POST
   X include the product in the body
   X in the first then, dispatch to loadProducts

* createContact(contact)
   X return a thunk function
   X make a fetch call to /contacts as a POST
   X include the contact in the body
   X in the first then, dispatch to loadContacts

* createComment(comment)
   X return a thunk function
   X make a fetch call to /comments as a POST
   X include the comment in the body
   X in the first then, dispatch to loadComments

* createVehicle(vehicle)
   X return a thunk function
   X make a fetch call to /vehicles as a POST
   X include the vehicle in the body
   X in the first then, dispatch to loadVehicles

### Create reducers in reducers/index.js
X Create reducers based on the state in state.js
X Determine which action the reducers should care about
X return the appropriate value

### AppContainer
X In AppContainer.js
X Import connect
X Import actions loadContacts, loadVehicles, loadComments, loadProducts

X mapDispatchToProps for these actions to props of the same name

X Connect and export

X Remember how to use connect when there is no mapStateToProps

### App
X In App.js
X call loadContacts, loadVehicles,loadComments,loadProducts in componentDidMount

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
