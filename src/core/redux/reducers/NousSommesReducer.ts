import {NousSommesActions, NousSommesState} from "../types/NousSommesTypes";
import {
    DELETE_NOUS_SOMMES_REQUEST,
    FETCH_NOUS_SOMMES_FAILURE,
    FETCH_NOUS_SOMMES_LIST_SUCCESS,
    FETCH_NOUS_SOMMES_REQUEST,
    FETCH_NOUS_SOMMES_SUCCESS,
    POST_NOUS_SOMMES_REQUEST,
    PUT_NOUS_SOMMES_REQUEST,
    PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST
} from "../types/ActionTypes";

const initialState: NousSommesState = {
    pending: false,
    nousSommesList: [],
    error: null,
    nousSommes: null
}

const nousSommesReducer = (state = initialState, action: NousSommesActions) => {
    switch (action.type) {
        case FETCH_NOUS_SOMMES_REQUEST:
        case PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST:
        case PUT_NOUS_SOMMES_REQUEST:
        case POST_NOUS_SOMMES_REQUEST:
        case DELETE_NOUS_SOMMES_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_NOUS_SOMMES_SUCCESS:
            return {
                ...state,
                pending: false,
                nousSommesList: [],
                nousSommes: action.payload.nousSommes,
                error: null
            }
        case FETCH_NOUS_SOMMES_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                nousSommesList: action.payload.nousSommesList,
                nousSommes: null,
                error: null
            }
        case FETCH_NOUS_SOMMES_FAILURE:
            return {
                ...state,
                pending: false,
                nousSommesList: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
};

export default nousSommesReducer;