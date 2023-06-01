import {
    FETCH_CONTACTEZ_NOUS_FAILURE,
    FETCH_CONTACTEZ_NOUS_REQUEST,
    FETCH_CONTACTEZ_NOUS_SUCCESS,
    PUT_CONTACTEZ_NOUS_REQUEST
} from "./ActionTypes";
import {IContactezNous} from "../../data/interfaces/IContactezNous";

export interface ContactezNousState {
    contactezNous: IContactezNous | null,
    error: string | null;
    pending: boolean;
}

export interface FetchContactezNousSuccessPayload {
    contactezNous: IContactezNous
}

export interface FetchContactezNousErrorPayload {
    error: string;
}

export interface PutContactezNousRequest {
    type: typeof PUT_CONTACTEZ_NOUS_REQUEST
    payload: IContactezNous
}

export interface FetchContactezNousRequest {
    type: typeof FETCH_CONTACTEZ_NOUS_REQUEST
}

export interface FetchContactezNousSuccess {
    type: typeof FETCH_CONTACTEZ_NOUS_SUCCESS
    payload: FetchContactezNousSuccessPayload
}

export interface FetchContactezNousFailure {
    type: typeof FETCH_CONTACTEZ_NOUS_FAILURE;
    payload: FetchContactezNousErrorPayload
}

export type ContactezNousActions =
    | FetchContactezNousRequest
    | FetchContactezNousSuccess
    | FetchContactezNousFailure
    | PutContactezNousRequest