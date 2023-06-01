import {
    FETCH_SLIDE_FAILURE,
    FETCH_SLIDE_SUCCESS,
    PUT_UPDATE_STATE_SLIDE_REQUEST,
    FETCH_SLIDE_LIST_SUCCESS,
    FETCH_SLIDE_LIST_REQUEST,
    DELETE_SLIDE_REQUEST,
    POST_SLIDE_REQUEST
} from "./ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export interface SlideState {
    slideList: IArticle[],
    slide: IArticle | null,
    error: string | null;
    pending: boolean;
}

export interface FetchSlideListSuccessPayload {
    slideList: IArticle[]
}

export interface FetchSlideSuccessPayload {
    slide: IArticle
}

export interface FetchSlideErrorPayload {
    error: string;
}

export interface PostSlideRequest {
    type: typeof POST_SLIDE_REQUEST
    payload: FormData
}

export interface PutUpdateStateSlideRequest {
    type: typeof PUT_UPDATE_STATE_SLIDE_REQUEST
    payload: IArticle
}

export interface DeleteSlideRequest {
    type: typeof DELETE_SLIDE_REQUEST
    payload: number
}

export interface FetchSlideListRequest {
    type: typeof FETCH_SLIDE_LIST_REQUEST
}

export interface FetchSlideListSuccess {
    type: typeof FETCH_SLIDE_LIST_SUCCESS
    payload: FetchSlideListSuccessPayload
}

export interface FetchSlideSuccess {
    type: typeof FETCH_SLIDE_SUCCESS
    payload: FetchSlideSuccessPayload
}

export interface FetchSlideFailure {
    type: typeof FETCH_SLIDE_FAILURE;
    payload: FetchSlideErrorPayload
}

export type SlideActions =
    | FetchSlideListRequest
    | FetchSlideSuccess
    | FetchSlideFailure
    | PutUpdateStateSlideRequest
    | FetchSlideListSuccess
    | DeleteSlideRequest
    | PostSlideRequest;