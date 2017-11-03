export function loadContacts() {
    return function (dispatch){
        dispatch({
            type: "LOAD_CONTACTS"
        });
        fetch("/contacts")
        .then((response) => {
            return response.json();
        })
        .then((contacts) => {
            dispatch(contactsLoaded(contacts));
        })
    }
}

export function loadedContacts(contacts) {
    return {
        type: "CONTACTS_LOADED",
        value: contacts
    };
}

export function loadVehicles(){
    return function (dispatch){
        dispatch({
            type: "LOAD_VEHICLES"
        });
        fetch("/vehicles")
        .then((response) => {
            return response.json();
        })
        .then((vehicles) => {
            dispatch(vehiclesLoaded(vehicles));
        })
    }
}

export function loadedVehicles(vehicles) {
    return {
        type: "VEHICLES_LOADED",
        value: vehicles
    };
}


export function loadComments(){
    return function (dispatch){
        disaptch({
            type: "LOAD_COMMENTS"
        });
        fetch("/comments")
        .then((response) => {
            return response.json();
        })
        .then((comments) => {
            dispatch(commentsLoaded(comments));
        })
    }
}

export function commentsLoaded(comments){
    return {
        type: "COMMENTS_LOADED",
        value: comments
    };
}


