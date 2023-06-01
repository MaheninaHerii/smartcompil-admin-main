import {
    DeleteSlideRequest,
    FetchSlideErrorPayload,
    FetchSlideFailure,
    FetchSlideListRequest,
    FetchSlideListSuccess,
    FetchSlideListSuccessPayload,
    FetchSlideSuccess,
    FetchSlideSuccessPayload,
    PostSlideRequest,
    PutUpdateStateSlideRequest
} from "../types/SlideTypes";
import {
    DELETE_SLIDE_REQUEST,
    FETCH_SLIDE_FAILURE,
    FETCH_SLIDE_LIST_REQUEST,
    FETCH_SLIDE_LIST_SUCCESS,
    FETCH_SLIDE_SUCCESS,
    POST_SLIDE_REQUEST,
    PUT_UPDATE_STATE_SLIDE_REQUEST
} from "../types/ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";


export const fetchSlideListRequest = (): FetchSlideListRequest => ({
    type: FETCH_SLIDE_LIST_REQUEST
});

export const putUpdateStateSlideRequest = (data: IArticle): PutUpdateStateSlideRequest => ({
    type: PUT_UPDATE_STATE_SLIDE_REQUEST,
    payload: data
});

export const postSlideRequest = (data: FormData): PostSlideRequest => ({
    type: POST_SLIDE_REQUEST,
    payload: data
});

export const deleteSlideRequest = (id: number): DeleteSlideRequest => ({
    type: DELETE_SLIDE_REQUEST,
    payload: id
});


export const fetchSlideSuccess = (
    payload: FetchSlideSuccessPayload
): FetchSlideSuccess => ({
    type: FETCH_SLIDE_SUCCESS,
    payload
});

export const fetchSlideListSuccess = (
    payload: FetchSlideListSuccessPayload
): FetchSlideListSuccess => ({
    type: FETCH_SLIDE_LIST_SUCCESS,
    payload
});

export const fetchSlideFailure = (
    payload: FetchSlideErrorPayload
): FetchSlideFailure => ({
    type: FETCH_SLIDE_FAILURE,
    payload
});