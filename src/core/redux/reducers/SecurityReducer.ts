import {SecurityActions, SecurityState} from '../types/SecurityTypes';
import {FETCH_AUTH_FAILURE, FETCH_AUTH_SUCCESS, POST_LOGIN_REQUEST} from "../types/ActionTypes";

const initialState: SecurityState = {
    pending: false,
    authResponse: null,
    error: null,
}

const securityReducer = (state = initialState, action: SecurityActions) => {
    switch (action.type) {
        case POST_LOGIN_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_AUTH_SUCCESS:
            return {
                ...state,
                pending: false,
                authResponse: action.payload.authResponse,
                error: null
            }
        case FETCH_AUTH_FAILURE:
            return {
                ...state,
                pending: false,
                authResponse: null,
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
};

export default securityReducer;