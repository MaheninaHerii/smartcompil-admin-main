import {
    IntroductionNousRejoindreActions,
    IntroductionNousRejoindreState
} from "../types/IntroductionNousRejoindreTypes";
import {
    DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_FAILURE,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_SUCCESS,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_SUCCESS,
    POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST
} from "../types/ActionTypes";

const initialState: IntroductionNousRejoindreState = {
    pending: false,
    introductionNousRejoindreList: [],
    error: null,
    introductionNousRejoindre: null
}

const introductionNousRejoindreReducer = (state = initialState, action: IntroductionNousRejoindreActions) => {
    switch (action.type) {
        case FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST:
        case PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST:
        case PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST:
        case POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST:
        case DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_INTRODUCTION_NOUS_REJOINDRE_SUCCESS:
            return {
                ...state,
                pending: false,
                introductionNousRejoindreList: [],
                introductionNousRejoindre: action.payload.introductionNousRejoindre,
                error: null
            }
        case FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                introductionNousRejoindreList: action.payload.introductionNousRejoindreList,
                introductionNousRejoindre: null,
                error: null
            }
        case FETCH_INTRODUCTION_NOUS_REJOINDRE_FAILURE:
            return {
                ...state,
                pending: false,
                introductionNousRejoindreList: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
};

export default introductionNousRejoindreReducer;