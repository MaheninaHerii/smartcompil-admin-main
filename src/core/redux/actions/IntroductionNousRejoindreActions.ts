import {
    DeleteIntroductionNousRejoindreRequest,
    FetchIntroductionNousRejoindreErrorPayload,
    FetchIntroductionNousRejoindreFailure,
    FetchIntroductionNousRejoindreListRequest,
    FetchIntroductionNousRejoindreListSuccess,
    FetchIntroductionNousRejoindreListSuccessPayload,
    FetchIntroductionNousRejoindreRequest,
    FetchIntroductionNousRejoindreSuccess,
    FetchIntroductionNousRejoindreSuccessPayload,
    PostIntroductionNousRejoindreRequest,
    PutIntroductionNousRejoindreRequest,
    PutUpdateStateIntroductionNousRejoindreRequest
} from "../types/IntroductionNousRejoindreTypes";
import {
    DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_FAILURE,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_SUCCESS,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_SUCCESS,
    POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST
} from "../types/ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export const fetchIntroductionNousRejoindreRequest = (id: number): FetchIntroductionNousRejoindreRequest => ({
    type: FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: id
});

export const fetchIntroductionNousRejoindreListRequest = (): FetchIntroductionNousRejoindreListRequest => ({
    type: FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_REQUEST
});

export const putUpdateStateIntroductionNousRejoindreRequest = (data: IArticle): PutUpdateStateIntroductionNousRejoindreRequest => ({
    type: PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: data
});

export const putIntroductionNousRejoindreRequest = (data: IArticle): PutIntroductionNousRejoindreRequest => ({
    type: PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: data
});

export const postIntroductionNousRejoindreRequest = (data: IArticle): PostIntroductionNousRejoindreRequest => ({
    type: POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: data
});

export const deleteIntroductionNousRejoindreRequest = (id: number): DeleteIntroductionNousRejoindreRequest => ({
    type: DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: id
});

export const fetchIntroductionNousRejoindreSuccess = (
    payload: FetchIntroductionNousRejoindreSuccessPayload
): FetchIntroductionNousRejoindreSuccess => ({
    type: FETCH_INTRODUCTION_NOUS_REJOINDRE_SUCCESS,
    payload
});

export const fetchIntroductionNousRejoindreListSuccess = (
    payload: FetchIntroductionNousRejoindreListSuccessPayload
): FetchIntroductionNousRejoindreListSuccess => ({
    type: FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_SUCCESS,
    payload
});

export const fetchIntroductionNousRejoindreFailure = (
    payload: FetchIntroductionNousRejoindreErrorPayload
): FetchIntroductionNousRejoindreFailure => ({
    type: FETCH_INTRODUCTION_NOUS_REJOINDRE_FAILURE,
    payload
});