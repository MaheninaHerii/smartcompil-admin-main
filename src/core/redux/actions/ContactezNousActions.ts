import {
    FetchContactezNousErrorPayload,
    FetchContactezNousFailure,
    FetchContactezNousRequest,
    FetchContactezNousSuccess,
    FetchContactezNousSuccessPayload,
    PutContactezNousRequest,
} from "../types/ContactezNousTypes";
import {
    FETCH_CONTACTEZ_NOUS_FAILURE,
    FETCH_CONTACTEZ_NOUS_REQUEST,
    FETCH_CONTACTEZ_NOUS_SUCCESS,
    PUT_CONTACTEZ_NOUS_REQUEST
} from "../types/ActionTypes";
import {IContactezNous} from "../../data/interfaces/IContactezNous";

export const fetchContactezNousRequest = (): FetchContactezNousRequest => ({
    type: FETCH_CONTACTEZ_NOUS_REQUEST
});

export const putContactezNousRequest = (data: IContactezNous): PutContactezNousRequest => ({
    type: PUT_CONTACTEZ_NOUS_REQUEST,
    payload: data
});

export const fetchContactezNousSuccess = (
    payload: FetchContactezNousSuccessPayload
): FetchContactezNousSuccess => ({
    type: FETCH_CONTACTEZ_NOUS_SUCCESS,
    payload
});

export const fetchContactezNousFailure = (
    payload: FetchContactezNousErrorPayload
): FetchContactezNousFailure => ({
    type: FETCH_CONTACTEZ_NOUS_FAILURE,
    payload
});