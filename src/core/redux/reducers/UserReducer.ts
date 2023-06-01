import {UserActions, UserState} from "../types/UserTypes";
import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS, PUT_UPDATE_EMAIL_USER_REQUEST,
    PUT_UPDATE_PASSWORD_USER_REQUEST
} from "../types/ActionTypes";

const initialState: UserState = {
    pending: false,
    error: null,
    user: null
}

const userReducer = (state = initialState, action: UserActions) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
        case PUT_UPDATE_PASSWORD_USER_REQUEST:
        case PUT_UPDATE_EMAIL_USER_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload.user,
                error: null
            }
        case FETCH_USER_FAILURE:
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

export default userReducer;