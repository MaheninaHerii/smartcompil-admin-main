import {
    FetchSlideTitleErrorPayload,
    FetchSlideTitleFailure,
    FetchSlideTitleRequest,
    FetchSlideTitleSuccess,
    FetchSlideTitleSuccessPayload,
    PutSlideTitleRequest,
} from "../types/SlideTitleTypes";
import {
    FETCH_SLIDE_TITLE_FAILURE,
    FETCH_SLIDE_TITLE_REQUEST,
    FETCH_SLIDE_TITLE_SUCCESS,
    PUT_SLIDE_TITLE_REQUEST
} from "../types/ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export const fetchSlideTitleRequest = (): FetchSlideTitleRequest => ({
    type: FETCH_SLIDE_TITLE_REQUEST
});

export const putSlideTitleRequest = (data: IArticle): PutSlideTitleRequest => ({
    type: PUT_SLIDE_TITLE_REQUEST,
    payload: data
});

export const fetchSlideTitleSuccess = (
    payload: FetchSlideTitleSuccessPayload
): FetchSlideTitleSuccess => ({
    type: FETCH_SLIDE_TITLE_SUCCESS,
    payload
});

export const fetchSlideTitleFailure = (
    payload: FetchSlideTitleErrorPayload
): FetchSlideTitleFailure => ({
    type: FETCH_SLIDE_TITLE_FAILURE,
    payload
});