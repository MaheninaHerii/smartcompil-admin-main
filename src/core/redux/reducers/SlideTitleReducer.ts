import {SlideTitleActions, SlideTitleState} from "../types/SlideTitleTypes";
import {
    FETCH_SLIDE_TITLE_FAILURE,
    FETCH_SLIDE_TITLE_REQUEST,
    FETCH_SLIDE_TITLE_SUCCESS,
    PUT_SLIDE_TITLE_REQUEST
} from "../types/ActionTypes";

const initialState: SlideTitleState = {
    pending: false,
    error: null,
    slideTitle: null
}

const slideTitleReducer = (state = initialState, action: SlideTitleActions) => {
    switch (action.type) {
        case FETCH_SLIDE_TITLE_REQUEST:
        case PUT_SLIDE_TITLE_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_SLIDE_TITLE_SUCCESS:
            return {
                ...state,
                pending: false,
                slideTitle: action.payload.slideTitle,
                error: null
            }
        case FETCH_SLIDE_TITLE_FAILURE:
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

export default slideTitleReducer;