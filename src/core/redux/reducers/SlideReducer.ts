import {SlideActions, SlideState} from "../types/SlideTypes";
import {
    DELETE_SLIDE_REQUEST,
    FETCH_SLIDE_FAILURE,
    FETCH_SLIDE_LIST_SUCCESS,
    FETCH_SLIDE_SUCCESS,
    POST_SLIDE_REQUEST,
    PUT_UPDATE_STATE_SLIDE_REQUEST
} from "../types/ActionTypes";

const initialState: SlideState = {
    pending: false,
    slideList: [],
    error: null,
    slide: null
}

const slideReducer = (state = initialState, action: SlideActions) => {
    switch (action.type) {
        case PUT_UPDATE_STATE_SLIDE_REQUEST:
        case POST_SLIDE_REQUEST:
        case DELETE_SLIDE_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_SLIDE_SUCCESS:
            return {
                ...state,
                pending: false,
                slideList: [],
                slide: action.payload.slide,
                error: null
            }
        case FETCH_SLIDE_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                slideList: action.payload.slideList,
                slide: null,
                error: null
            }
        case FETCH_SLIDE_FAILURE:
            return {
                ...state,
                pending: false,
                slideList: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
};

export default slideReducer;