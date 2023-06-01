import {PosteActions, PosteState} from "../types/PosteTypes";
import {
    DELETE_POSTE_REQUEST,
    FETCH_POSTE_APPLY_FAILURE,
    FETCH_POSTE_APPLY_REQUEST,
    FETCH_POSTE_APPLY_SUCCESS,
    FETCH_POSTE_FAILURE,
    FETCH_POSTE_LIST_SUCCESS,
    FETCH_POSTE_REQUEST,
    FETCH_POSTE_SUCCESS,
    POST_POSTE_REQUEST,
    PUT_DUPLICATE_POSTE_REQUEST,
    PUT_POSTE_REQUEST,
    PUT_UPDATE_STATE_POSTE_REQUEST
} from "../types/ActionTypes";

const initialState: PosteState = {
    pending: false,
    posteList: [],
    error: null,
    poste: null,
    apply: []
}

const posteReducer = (state = initialState, action: PosteActions) => {
    switch (action.type) {
        case FETCH_POSTE_APPLY_REQUEST:
        case FETCH_POSTE_REQUEST:
        case PUT_UPDATE_STATE_POSTE_REQUEST:
        case PUT_DUPLICATE_POSTE_REQUEST:
        case PUT_POSTE_REQUEST:
        case POST_POSTE_REQUEST:
        case DELETE_POSTE_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_POSTE_SUCCESS:
            return {
                ...state,
                pending: false,
                posteList: [],
                poste: action.payload.poste,
                error: null
            }
        case FETCH_POSTE_APPLY_SUCCESS:
            return {
                ...state,
                pending: false,
                apply: action.payload.apply,
                error: null
            }
        case FETCH_POSTE_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                posteList: action.payload.posteList,
                poste: null,
                error: null
            }
        case FETCH_POSTE_FAILURE:
            return {
                ...state,
                pending: false,
                posteList: [],
                error: action.payload.error
            }
        case FETCH_POSTE_APPLY_FAILURE:
            return {
                ...state,
                pending: false,
                apply: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
};

export default posteReducer;