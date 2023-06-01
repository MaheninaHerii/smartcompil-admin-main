import {
    FETCH_POSTE_FAILURE,
    FETCH_POSTE_SUCCESS,
    FETCH_POSTE_REQUEST,
    PUT_UPDATE_STATE_POSTE_REQUEST,
    FETCH_POSTE_LIST_SUCCESS,
    FETCH_POSTE_LIST_REQUEST,
    DELETE_POSTE_REQUEST,
    PUT_POSTE_REQUEST,
    POST_POSTE_REQUEST,
    PUT_DUPLICATE_POSTE_REQUEST,
    FETCH_POSTE_APPLY_REQUEST, FETCH_POSTE_APPLY_SUCCESS, FETCH_POSTE_APPLY_FAILURE
} from "./ActionTypes";
import {IPoste} from "../../data/interfaces/IPoste";
import {IApply} from "../../data/interfaces/IApply";

export interface PosteState {
    posteList: IPoste[];
    poste: IPoste | null;
    error: string | null;
    pending: boolean;
    apply: IApply[]
}

export interface FetchPosteListSuccessPayload {
    posteList: IPoste[]
}

export interface FetchApplySuccessPayload {
    apply: IApply[]
}

export interface FetchPosteSuccessPayload {
    poste: IPoste
}

export interface FetchPosteErrorPayload {
    error: string;
}

export interface FetchApplyErrorPayload {
    error: string;
}


export interface PutPosteRequest {
    type: typeof PUT_POSTE_REQUEST
    payload: IPoste
}

export interface PostPosteRequest {
    type: typeof POST_POSTE_REQUEST
    payload: IPoste
}

export interface PutDuplicatePosteRequest {
    type: typeof PUT_DUPLICATE_POSTE_REQUEST
    payload: IPoste
}

export interface PutUpdateStatePosteRequest {
    type: typeof PUT_UPDATE_STATE_POSTE_REQUEST
    payload: IPoste
}

export interface DeletePosteRequest {
    type: typeof DELETE_POSTE_REQUEST
    payload: number
}

export interface FetchPosteRequest {
    type: typeof FETCH_POSTE_REQUEST
    payload: number
}

export interface FetchPosteListRequest {
    type: typeof FETCH_POSTE_LIST_REQUEST
}

export interface FetchApplyRequest {
    type: typeof FETCH_POSTE_APPLY_REQUEST
}

export interface FetchPosteListSuccess {
    type: typeof FETCH_POSTE_LIST_SUCCESS
    payload: FetchPosteListSuccessPayload
}

export interface FetchPosteSuccess {
    type: typeof FETCH_POSTE_SUCCESS
    payload: FetchPosteSuccessPayload
}

export interface FetchApplySuccess {
    type: typeof FETCH_POSTE_APPLY_SUCCESS
    payload: FetchApplySuccessPayload
}

export interface FetchApplyFailure {
    type: typeof FETCH_POSTE_APPLY_FAILURE;
    payload: FetchApplyErrorPayload
}

export interface FetchPosteFailure {
    type: typeof FETCH_POSTE_FAILURE;
    payload: FetchPosteErrorPayload
}

export type PosteActions =
    | FetchPosteRequest
    | FetchPosteListRequest
    | FetchPosteSuccess
    | FetchPosteFailure
    | PutUpdateStatePosteRequest
    | FetchPosteListSuccess
    | DeletePosteRequest
    | PutPosteRequest
    | PostPosteRequest
    | PutDuplicatePosteRequest
    | FetchApplyRequest
    | FetchApplyFailure
    | FetchApplySuccess;