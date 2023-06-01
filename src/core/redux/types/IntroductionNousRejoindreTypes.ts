import {
    FETCH_INTRODUCTION_NOUS_REJOINDRE_FAILURE,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_SUCCESS,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_SUCCESS,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_REQUEST,
    DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST
} from "./ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export interface IntroductionNousRejoindreState {
    introductionNousRejoindreList: IArticle[],
    introductionNousRejoindre: IArticle | null,
    error: string | null;
    pending: boolean;
}

export interface FetchIntroductionNousRejoindreListSuccessPayload {
    introductionNousRejoindreList: IArticle[]
}

export interface FetchIntroductionNousRejoindreSuccessPayload {
    introductionNousRejoindre: IArticle
}

export interface FetchIntroductionNousRejoindreErrorPayload {
    error: string;
}

export interface PutIntroductionNousRejoindreRequest {
    type: typeof PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST
    payload: IArticle
}

export interface PostIntroductionNousRejoindreRequest {
    type: typeof POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST
    payload: IArticle
}

export interface PutUpdateStateIntroductionNousRejoindreRequest {
    type: typeof PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST
    payload: IArticle
}

export interface DeleteIntroductionNousRejoindreRequest {
    type: typeof DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST
    payload: number
}

export interface FetchIntroductionNousRejoindreRequest {
    type: typeof FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST
    payload: number
}

export interface FetchIntroductionNousRejoindreListRequest {
    type: typeof FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_REQUEST
}

export interface FetchIntroductionNousRejoindreListSuccess {
    type: typeof FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_SUCCESS
    payload: FetchIntroductionNousRejoindreListSuccessPayload
}

export interface FetchIntroductionNousRejoindreSuccess {
    type: typeof FETCH_INTRODUCTION_NOUS_REJOINDRE_SUCCESS
    payload: FetchIntroductionNousRejoindreSuccessPayload
}

export interface FetchIntroductionNousRejoindreFailure {
    type: typeof FETCH_INTRODUCTION_NOUS_REJOINDRE_FAILURE;
    payload: FetchIntroductionNousRejoindreErrorPayload
}

export type IntroductionNousRejoindreActions =
    | FetchIntroductionNousRejoindreRequest
    | FetchIntroductionNousRejoindreListRequest
    | FetchIntroductionNousRejoindreSuccess
    | FetchIntroductionNousRejoindreFailure
    | PutUpdateStateIntroductionNousRejoindreRequest
    | FetchIntroductionNousRejoindreListSuccess
    | DeleteIntroductionNousRejoindreRequest
    | PutIntroductionNousRejoindreRequest
    | PostIntroductionNousRejoindreRequest;