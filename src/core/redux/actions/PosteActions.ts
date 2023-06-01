import {
    DeletePosteRequest,
    FetchApplyErrorPayload,
    FetchApplyFailure,
    FetchApplyRequest,
    FetchApplySuccess,
    FetchApplySuccessPayload,
    FetchPosteErrorPayload,
    FetchPosteFailure,
    FetchPosteListRequest,
    FetchPosteListSuccess,
    FetchPosteListSuccessPayload,
    FetchPosteRequest,
    FetchPosteSuccess,
    FetchPosteSuccessPayload,
    PostPosteRequest,
    PutDuplicatePosteRequest,
    PutPosteRequest,
    PutUpdateStatePosteRequest
} from "../types/PosteTypes";
import {
    DELETE_POSTE_REQUEST,
    FETCH_POSTE_APPLY_FAILURE,
    FETCH_POSTE_APPLY_REQUEST,
    FETCH_POSTE_APPLY_SUCCESS,
    FETCH_POSTE_FAILURE,
    FETCH_POSTE_LIST_REQUEST,
    FETCH_POSTE_LIST_SUCCESS,
    FETCH_POSTE_REQUEST,
    FETCH_POSTE_SUCCESS,
    POST_POSTE_REQUEST,
    PUT_DUPLICATE_POSTE_REQUEST,
    PUT_POSTE_REQUEST,
    PUT_UPDATE_STATE_POSTE_REQUEST
} from "../types/ActionTypes";
import {IPoste} from "../../data/interfaces/IPoste";


export const fetchPosteRequest = (id: number): FetchPosteRequest => ({
    type: FETCH_POSTE_REQUEST,
    payload: id
});

export const fetchApplyRequest = (): FetchApplyRequest => ({
    type: FETCH_POSTE_APPLY_REQUEST
});

export const fetchPosteListRequest = (): FetchPosteListRequest => ({
    type: FETCH_POSTE_LIST_REQUEST
});

export const putUpdateStatePosteRequest = (data: IPoste): PutUpdateStatePosteRequest => ({
    type: PUT_UPDATE_STATE_POSTE_REQUEST,
    payload: data
});

export const putDuplicatePosteRequest = (data: IPoste): PutDuplicatePosteRequest => ({
    type: PUT_DUPLICATE_POSTE_REQUEST,
    payload: data
});

export const putPosteRequest = (data: IPoste): PutPosteRequest => ({
    type: PUT_POSTE_REQUEST,
    payload: data
});

export const postPosteRequest = (data: IPoste): PostPosteRequest => ({
    type: POST_POSTE_REQUEST,
    payload: data
});

export const deletePosteRequest = (id: number): DeletePosteRequest => ({
    type: DELETE_POSTE_REQUEST,
    payload: id
});


export const fetchPosteSuccess = (
    payload: FetchPosteSuccessPayload
): FetchPosteSuccess => ({
    type: FETCH_POSTE_SUCCESS,
    payload
});

export const fetchApplySuccess = (
    payload: FetchApplySuccessPayload
): FetchApplySuccess => ({
    type: FETCH_POSTE_APPLY_SUCCESS,
    payload
});

export const fetchPosteListSuccess = (
    payload: FetchPosteListSuccessPayload
): FetchPosteListSuccess => ({
    type: FETCH_POSTE_LIST_SUCCESS,
    payload
});

export const fetchPosteFailure = (
    payload: FetchPosteErrorPayload
): FetchPosteFailure => ({
    type: FETCH_POSTE_FAILURE,
    payload
});

export const fetchApplyFailure = (
    payload: FetchApplyErrorPayload
): FetchApplyFailure => ({
    type: FETCH_POSTE_APPLY_FAILURE,
    payload
});