import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    deletePoste, duplicatePoste, fetchApply,
    fetchPoste, fetchPosteList,
    savePoste,
    updatePoste,
    updateStatePoste
} from "../../services/PosteService";
import {IPoste} from "../../data/interfaces/IPoste";
import {
    fetchApplyFailure,
    fetchApplySuccess,
    fetchPosteFailure,
    fetchPosteListRequest,
    fetchPosteListSuccess,
    fetchPosteSuccess
} from "../actions/PosteActions";
import {
    DELETE_POSTE_REQUEST, FETCH_POSTE_APPLY_REQUEST,
    FETCH_POSTE_LIST_REQUEST,
    FETCH_POSTE_REQUEST,
    POST_POSTE_REQUEST, PUT_DUPLICATE_POSTE_REQUEST,
    PUT_POSTE_REQUEST,
    PUT_UPDATE_STATE_POSTE_REQUEST
} from "../types/ActionTypes";
import {IApply} from "../../data/interfaces/IApply";

function* fetchPosteSaga({type, payload}: {
    type: typeof FETCH_POSTE_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IPoste> = yield call(fetchPoste, payload);
        yield put(
            fetchPosteSuccess({
                poste: response.data
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchPosteFailure({
                error: e && e.message || 'FETCH_POSTE_ERROR'
            })
        );
    }
}

function* fetchApplySaga() {
    try {
        const response: AxiosResponse<IApply[]> = yield call(fetchApply);
        yield put(
            fetchApplySuccess({
                apply: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchApplyFailure({
                error: e && e.message || 'FETCH_APPLY_ERROR'
            })
        );
    }
}

function* fetchPosteListSaga() {
    try {
        const response: AxiosResponse<IPoste[]> = yield call(fetchPosteList);
        yield put(
            fetchPosteListSuccess({
                posteList: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchPosteFailure({
                error: e && e.message || 'FETCH_POSTE_ERROR'
            })
        );
    }
}

function* putUpdateStatePosteSaga({type, payload}: {
    type: typeof PUT_UPDATE_STATE_POSTE_REQUEST,
    payload: IPoste
}) {
    try {
        const response: AxiosResponse<IPoste> = yield call(updateStatePoste, payload);
        yield put(
            fetchPosteSuccess({
                poste: response.data
            })
        );
        yield put(fetchPosteListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchPosteFailure({
                error: e && e.message || 'FETCH_POSTE_ERROR'
            })
        );
    }
}

function* putDuplicatePosteSaga({type, payload}: {
    type: typeof PUT_DUPLICATE_POSTE_REQUEST,
    payload: IPoste
}) {
    try {
        const response: AxiosResponse<IPoste> = yield call(duplicatePoste, payload);
        yield put(
            fetchPosteSuccess({
                poste: response.data
            })
        );
        yield put(fetchPosteListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchPosteFailure({
                error: e && e.message || 'FETCH_POSTE_ERROR'
            })
        );
    }
}

function* deletePosteSaga({type, payload}: {
    type: typeof DELETE_POSTE_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IPoste> = yield call(deletePoste, payload);
        yield put(
            fetchPosteSuccess({
                poste: response.data
            })
        );
        yield put(fetchPosteListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchPosteFailure({
                error: e && e.message || 'FETCH_POSTE_ERROR'
            })
        );
    }
}

function* putPosteSaga({type, payload}: {
    type: typeof PUT_POSTE_REQUEST,
    payload: IPoste
}) {
    try {
        const response: AxiosResponse<IPoste> = yield call(updatePoste, payload);
        const poste = response.data;
        poste.status = "success";
        yield put(
            fetchPosteSuccess({
                poste
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchPosteFailure({
                error: e && e.message || 'FETCH_POSTE_ERROR'
            })
        );
    }
}

function* postPosteSaga({type, payload}: {
    type: typeof POST_POSTE_REQUEST,
    payload: IPoste
}) {
    try {
        const response: AxiosResponse<IPoste> = yield call(savePoste, payload);
        const poste = response.data;
        poste.status = "success";
        yield put(
            fetchPosteSuccess({
                poste
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchPosteFailure({
                error: e && e.message || 'FETCH_POSTE_ERROR'
            })
        );
    }
}

function* posteSaga() {
    yield all([
        takeLatest(FETCH_POSTE_REQUEST, fetchPosteSaga),
        takeLatest(FETCH_POSTE_LIST_REQUEST, fetchPosteListSaga),
        takeLatest(PUT_UPDATE_STATE_POSTE_REQUEST, putUpdateStatePosteSaga),
        takeLatest(DELETE_POSTE_REQUEST, deletePosteSaga),
        takeLatest(POST_POSTE_REQUEST, postPosteSaga),
        takeLatest(PUT_POSTE_REQUEST, putPosteSaga),
        takeLatest(PUT_DUPLICATE_POSTE_REQUEST, putDuplicatePosteSaga),
        takeLatest(FETCH_POSTE_APPLY_REQUEST, fetchApplySaga)
    ]);
}

export default posteSaga;