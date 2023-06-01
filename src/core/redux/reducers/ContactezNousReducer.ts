import {ContactezNousActions, ContactezNousState} from "../types/ContactezNousTypes";
import {
    FETCH_CONTACTEZ_NOUS_FAILURE,
    FETCH_CONTACTEZ_NOUS_REQUEST,
    FETCH_CONTACTEZ_NOUS_SUCCESS,
    PUT_CONTACTEZ_NOUS_REQUEST
} from "../types/ActionTypes";

const initialState: ContactezNousState = {
    pending: false,
    error: null,
    contactezNous: null
}

const contactezNousReducer = (state = initialState, action: ContactezNousActions) => {
    switch (action.type) {
        case PUT_CONTACTEZ_NOUS_REQUEST:
        case FETCH_CONTACTEZ_NOUS_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_CONTACTEZ_NOUS_SUCCESS:
            return {
                ...state,
                pending: false,
                contactezNous: action.payload.contactezNous,
                error: null
            }
        case FETCH_CONTACTEZ_NOUS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
};

export default contactezNousReducer;