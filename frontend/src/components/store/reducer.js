const reducer = (state, action) => {

    if (action.type === "REGISTRATION") {
        return {
            ...state,
            registration: action.value,
        }
    };
    if (action.type === "PARKED") {
        return {
            ...state,
            parked: action.value
        }
    };
    if (action.type === "DATE_OF_BIRTH") {
        return {
            ...state, 
            dob: action.value
        }
    };
    if (action.type === "FIRST_NAME") {
        return {
            ...state,
            first_name: action.value
        }
    };
    if (action.type === "SURNAME") {
        return {
            ...state,
            surname: action.value
        }
    };
    if (action.type === "ADDRESS") {
        return {
            ...state,
            address: action.value
        }
    };
    if (action.type === "PHONE") {
        return {
            ...state,
            phone: action.value
        }
    };
    if (action.type === "EMAIL") {
        return {
            ...state,
            email: action.value
        }
    }
    if (action.type === "PLAN") {
        return {
            ...state, 
            plan: action.value
        }
    }
    return state

}  

export default reducer