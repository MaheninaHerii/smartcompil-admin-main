import {
    DeleteNosServicesEtProduitsRequest,
    FetchNosServicesEtProduitsErrorPayload,
    FetchNosServicesEtProduitsFailure,
    FetchNosServicesEtProduitsListRequest,
    FetchNosServicesEtProduitsListSuccess,
    FetchNosServicesEtProduitsListSuccessPayload,
    FetchNosServicesEtProduitsRequest,
    FetchNosServicesEtProduitsSuccess,
    FetchNosServicesEtProduitsSuccessPayload,
    PostNosServicesEtProduitsRequest,
    PutNosServicesEtProduitsRequest,
    PutUpdateStateNosServicesEtProduitsRequest
} from "../types/NosServicesEtProduitsTypes";
import {
    DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_FAILURE,
    FETCH_NOS_SERVICES_ET_PRODUITS_LIST_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_LIST_SUCCESS,
    FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_SUCCESS,
    POST_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST
} from "../types/ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export const fetchNosServicesEtProduitsRequest = (id: number): FetchNosServicesEtProduitsRequest => ({
    type: FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: id
});

export const fetchNosServicesEtProduitsListRequest = (): FetchNosServicesEtProduitsListRequest => ({
    type: FETCH_NOS_SERVICES_ET_PRODUITS_LIST_REQUEST
});

export const putUpdateStateNosServicesEtProduitsRequest = (data: IArticle): PutUpdateStateNosServicesEtProduitsRequest => ({
    type: PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: data
});

export const putNosServicesEtProduitsRequest = (data: FormData): PutNosServicesEtProduitsRequest => ({
    type: PUT_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: data
});

export const postNosServicesEtProduitsRequest = (data: FormData): PostNosServicesEtProduitsRequest => ({
    type: POST_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: data
});

export const deleteNosServicesEtProduitsRequest = (id: number): DeleteNosServicesEtProduitsRequest => ({
    type: DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: id
});

export const fetchNosServicesEtProduitsSuccess = (
    payload: FetchNosServicesEtProduitsSuccessPayload
): FetchNosServicesEtProduitsSuccess => ({
    type: FETCH_NOS_SERVICES_ET_PRODUITS_SUCCESS,
    payload
});

export const fetchNosServicesEtProduitsListSuccess = (
    payload: FetchNosServicesEtProduitsListSuccessPayload
): FetchNosServicesEtProduitsListSuccess => ({
    type: FETCH_NOS_SERVICES_ET_PRODUITS_LIST_SUCCESS,
    payload
});

export const fetchNosServicesEtProduitsFailure = (
    payload: FetchNosServicesEtProduitsErrorPayload
): FetchNosServicesEtProduitsFailure => ({
    type: FETCH_NOS_SERVICES_ET_PRODUITS_FAILURE,
    payload
});