import {
    FETCH_NOUS_SOMMES_FAILURE,
    FETCH_NOUS_SOMMES_SUCCESS,
    FETCH_NOUS_SOMMES_REQUEST,
    PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST,
    FETCH_NOUS_SOMMES_LIST_SUCCESS,
    FETCH_NOUS_SOMMES_LIST_REQUEST, DELETE_NOUS_SOMMES_REQUEST, PUT_NOUS_SOMMES_REQUEST, POST_NOUS_SOMMES_REQUEST
} from "./ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export interface NousSommesState {
    nousSommesList: IArticle[],
    nousSommes: IArticle | null,
    error: string | null;
    pending: boolean;
}

export interface FetchNousSommesListSuccessPayload {
    nousSommesList: IArticle[]
}

export interface FetchNousSommesSuccessPayload {
    nousSommes: IArticle
}

export interface FetchNousSommesErrorPayload {
    error: string;
}

export interface PutNousSommesRequest {
    type: typeof PUT_NOUS_SOMMES_REQUEST
    payload: FormData
}

export interface PostNousSommesRequest {
    type: typeof POST_NOUS_SOMMES_REQUEST
    payload: FormData
}

export interface PutUpdateStateNousSommesRequest {
    type: typeof PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST
    payload: IArticle
}

export interface DeleteNousSommesRequest {
    type: typeof DELETE_NOUS_SOMMES_REQUEST
    payload: number
}

export interface FetchNousSommesRequest {
    type: typeof FETCH_NOUS_SOMMES_REQUEST
    payload: number
}

export interface FetchNousSommesListRequest {
    type: typeof FETCH_NOUS_SOMMES_LIST_REQUEST
}

export interface FetchNousSommesListSuccess {
    type: typeof FETCH_NOUS_SOMMES_LIST_SUCCESS
    payload: FetchNousSommesListSuccessPayload
}

export interface FetchNousSommesSuccess {
    type: typeof FETCH_NOUS_SOMMES_SUCCESS
    payload: FetchNousSommesSuccessPayload
}

export interface FetchNousSommesFailure {
    type: typeof FETCH_NOUS_SOMMES_FAILURE;
    payload: FetchNousSommesErrorPayload
}

export type NousSommesActions =
    | FetchNousSommesRequest
    | FetchNousSommesListRequest
    | FetchNousSommesSuccess
    | FetchNousSommesFailure
    | PutUpdateStateNousSommesRequest
    | FetchNousSommesListSuccess
    | DeleteNousSommesRequest
    | PutNousSommesRequest
    | PostNousSommesRequest;