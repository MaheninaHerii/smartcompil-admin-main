import {
    FETCH_SLIDE_TITLE_FAILURE,
    FETCH_SLIDE_TITLE_REQUEST, FETCH_SLIDE_TITLE_SUCCESS,
    PUT_SLIDE_TITLE_REQUEST
} from "./ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export interface SlideTitleState {
    slideTitle: IArticle | null,
    error: string | null;
    pending: boolean;
}

export interface FetchSlideTitleSuccessPayload {
    slideTitle: IArticle
}

export interface FetchSlideTitleErrorPayload {
    error: string;
}

export interface PutSlideTitleRequest {
    type: typeof PUT_SLIDE_TITLE_REQUEST
    payload: IArticle
}

export interface FetchSlideTitleRequest {
    type: typeof FETCH_SLIDE_TITLE_REQUEST
}


export interface FetchSlideTitleSuccess {
    type: typeof FETCH_SLIDE_TITLE_SUCCESS
    payload: FetchSlideTitleSuccessPayload
}

export interface FetchSlideTitleFailure {
    type: typeof FETCH_SLIDE_TITLE_FAILURE;
    payload: FetchSlideTitleErrorPayload
}

export type SlideTitleActions =
    | FetchSlideTitleRequest
    | FetchSlideTitleSuccess
    | FetchSlideTitleFailure
    | PutSlideTitleRequest