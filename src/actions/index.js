export function loadContacts() {
    return function (dispatch) {
        dispatch({
            type: "LOAD_CONTACTS"
        });
        fetch("http://localhost:4001/contacts")
        .then( (response) => {
            return response.json();
        }).then((contacts) => {
            dispatch(contactsLoaded(contacts));
        });
    };
}

export function contactsLoaded(contacts) {
    return {
        type: "CONTACTS_LOADED",
        value: contacts
    };
}