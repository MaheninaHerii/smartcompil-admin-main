import {
    FETCH_NOS_SERVICES_ET_PRODUITS_FAILURE,
    FETCH_NOS_SERVICES_ET_PRODUITS_SUCCESS,
    FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_LIST_SUCCESS,
    FETCH_NOS_SERVICES_ET_PRODUITS_LIST_REQUEST,
    DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_NOS_SERVICES_ET_PRODUITS_REQUEST,
    POST_NOS_SERVICES_ET_PRODUITS_REQUEST
} from "./ActionTypes";
import {IArticle} from "../../data/interfaces/IArticle";

export interface NosServicesEtProduitsState {
    nosServicesEtProduitsList: IArticle[],
    nosServicesEtProduits: IArticle | null,
    error: string | null;
    pending: boolean;
}

export interface FetchNosServicesEtProduitsListSuccessPayload {
    nosServicesEtProduitsList: IArticle[]
}

export interface FetchNosServicesEtProduitsSuccessPayload {
    nosServicesEtProduits: IArticle
}

export interface FetchNosServicesEtProduitsErrorPayload {
    error: string;
}

export interface PutNosServicesEtProduitsRequest {
    type: typeof PUT_NOS_SERVICES_ET_PRODUITS_REQUEST
    payload: FormData
}

export interface PostNosServicesEtProduitsRequest {
    type: typeof POST_NOS_SERVICES_ET_PRODUITS_REQUEST
    payload: FormData
}

export interface PutUpdateStateNosServicesEtProduitsRequest {
    type: typeof PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST
    payload: IArticle
}

export interface DeleteNosServicesEtProduitsRequest {
    type: typeof DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST
    payload: number
}

export interface FetchNosServicesEtProduitsRequest {
    type: typeof FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST
    payload: number
}

export interface FetchNosServicesEtProduitsListRequest {
    type: typeof FETCH_NOS_SERVICES_ET_PRODUITS_LIST_REQUEST
}

export interface FetchNosServicesEtProduitsListSuccess {
    type: typeof FETCH_NOS_SERVICES_ET_PRODUITS_LIST_SUCCESS
    payload: FetchNosServicesEtProduitsListSuccessPayload
}

export interface FetchNosServicesEtProduitsSuccess {
    type: typeof FETCH_NOS_SERVICES_ET_PRODUITS_SUCCESS
    payload: FetchNosServicesEtProduitsSuccessPayload
}

export interface FetchNosServicesEtProduitsFailure {
    type: typeof FETCH_NOS_SERVICES_ET_PRODUITS_FAILURE;
    payload: FetchNosServicesEtProduitsErrorPayload
}

export type NosServicesEtProduitsActions =
    | FetchNosServicesEtProduitsRequest
    | FetchNosServicesEtProduitsListRequest
    | FetchNosServicesEtProduitsSuccess
    | FetchNosServicesEtProduitsFailure
    | PutUpdateStateNosServicesEtProduitsRequest
    | FetchNosServicesEtProduitsListSuccess
    | DeleteNosServicesEtProduitsRequest
    | PutNosServicesEtProduitsRequest
    | PostNosServicesEtProduitsRequest;