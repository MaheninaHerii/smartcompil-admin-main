import {
    DeleteNousSommesRequest,
    FetchNousSommesErrorPayload,
    FetchNousSommesFailure,
    FetchNousSommesListRequest,
    FetchNousSommesListSuccess,
    FetchNousSommesListSuccessPayload,
    FetchNousSommesRequest,
    FetchNousSommesSuccess,
    FetchNousSommesSuccessPayload,
    PostNousSommesRequest,
    PutNousSommesRequest,
    PutUpdateStateNousSommesRequest
} from "../types/NousSommesTypes";
import {
    DELETE_NOUS_SOMMES_REQUEST,
    FETCH_NOUS_SOMMES_FAILURE,
    FETCH_NOUS_SOMMES_LIST_REQUEST,
    FETCH_NOUS_SOMMES_LIST_SUCCESS,
    FETCH_NOUS_SOMMES_REQUEST,
    FETCH_NOUS_SOMMES_SUCCESS,
    POST_NOUS_SOMMES_REQUEST,
    PUT_NOUS_SOMMES_REQUEST,
    PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST
} from "../types/ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";


export const fetchNousSommesRequest = (id: number): FetchNousSommesRequest => ({
    type: FETCH_NOUS_SOMMES_REQUEST,
    payload: id
});

export const fetchNousSommesListRequest = (): FetchNousSommesListRequest => ({
    type: FETCH_NOUS_SOMMES_LIST_REQUEST
});

export const putUpdateStateNousSommesRequest = (data: IArticle): PutUpdateStateNousSommesRequest => ({
    type: PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST,
    payload: data
});

export const putNousSommesRequest = (data: FormData): PutNousSommesRequest => ({
    type: PUT_NOUS_SOMMES_REQUEST,
    payload: data
});

export const postNousSommesRequest = (data: FormData): PostNousSommesRequest => ({
    type: POST_NOUS_SOMMES_REQUEST,
    payload: data
});

export const deleteNousSommesRequest = (id: number): DeleteNousSommesRequest => ({
    type: DELETE_NOUS_SOMMES_REQUEST,
    payload: id
});


export const fetchNousSommesSuccess = (
    payload: FetchNousSommesSuccessPayload
): FetchNousSommesSuccess => ({
    type: FETCH_NOUS_SOMMES_SUCCESS,
    payload
});

export const fetchNousSommesListSuccess = (
    payload: FetchNousSommesListSuccessPayload
): FetchNousSommesListSuccess => ({
    type: FETCH_NOUS_SOMMES_LIST_SUCCESS,
    payload
});

export const fetchNousSommesFailure = (
    payload: FetchNousSommesErrorPayload
): FetchNousSommesFailure => ({
    type: FETCH_NOUS_SOMMES_FAILURE,
    payload
});