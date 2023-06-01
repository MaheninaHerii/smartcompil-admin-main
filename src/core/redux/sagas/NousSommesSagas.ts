import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    deleteNousSommes,
    fetchNousSommes, fetchNousSommesList,
    saveNousSommes,
    updateNousSommes,
    updateStateNousSommes
} from "../../services/NousSommesService";
import {IArticle} from "../../data/interfaces/IArticle";
import {
    fetchNousSommesFailure,
    fetchNousSommesListRequest,
    fetchNousSommesListSuccess,
    fetchNousSommesSuccess
} from "../actions/NousSommesActions";
import {
    DELETE_NOUS_SOMMES_REQUEST,
    FETCH_NOUS_SOMMES_LIST_REQUEST,
    FETCH_NOUS_SOMMES_REQUEST,
    POST_NOUS_SOMMES_REQUEST,
    PUT_NOUS_SOMMES_REQUEST,
    PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST
} from "../types/ActionTypes";
import {PUT_UPDATE_STATE_NOUS_SOMMES} from "../../data/constants/UrlApi";

function* fetchNousSommesSaga({type, payload}: {
    type: typeof FETCH_NOUS_SOMMES_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(fetchNousSommes, payload);
        yield put(
            fetchNousSommesSuccess({
                nousSommes: response.data
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNousSommesFailure({
                error: e && e.message || 'FETCH_NOUS_SOMMES_ERROR'
            })
        );
    }
}

function* fetchNousSommesListSaga() {
    try {
        const response: AxiosResponse<IArticle[]> = yield call(fetchNousSommesList);
        yield put(
            fetchNousSommesListSuccess({
                nousSommesList: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchNousSommesFailure({
                error: e && e.message || 'FETCH_NOUS_SOMMES_ERROR'
            })
        );
    }
}

function* putUpdateStateNousSommesSaga({type, payload}: {
    type: typeof PUT_UPDATE_STATE_NOUS_SOMMES,
    payload: IArticle
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateStateNousSommes, payload);
        yield put(
            fetchNousSommesSuccess({
                nousSommes: response.data
            })
        );
        yield put(fetchNousSommesListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNousSommesFailure({
                error: e && e.message || 'FETCH_NOUS_SOMMES_ERROR'
            })
        );
    }
}

function* deleteNousSommesSaga({type, payload}: {
    type: typeof DELETE_NOUS_SOMMES_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(deleteNousSommes, payload);
        yield put(
            fetchNousSommesSuccess({
                nousSommes: response.data
            })
        );
        yield put(fetchNousSommesListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNousSommesFailure({
                error: e && e.message || 'FETCH_NOUS_SOMMES_ERROR'
            })
        );
    }
}

function* putNousSommesSaga({type, payload}: {
    type: typeof PUT_NOUS_SOMMES_REQUEST,
    payload: FormData
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateNousSommes, payload);
        const nousSommes = response.data;
        nousSommes.status = "success";
        yield put(
            fetchNousSommesSuccess({
                nousSommes
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNousSommesFailure({
                error: e && e.message || 'FETCH_NOUS_SOMMES_ERROR'
            })
        );
    }
}

function* postNousSommesSaga({type, payload}: {
    type: typeof POST_NOUS_SOMMES_REQUEST,
    payload: FormData
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(saveNousSommes, payload);
        const nousSommes = response.data;
        nousSommes.status = "success";
        yield put(
            fetchNousSommesSuccess({
                nousSommes
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNousSommesFailure({
                error: e && e.message || 'FETCH_NOUS_SOMMES_ERROR'
            })
        );
    }
}

function* nousSommesSaga() {
    yield all([
        takeLatest(FETCH_NOUS_SOMMES_REQUEST, fetchNousSommesSaga),
        takeLatest(FETCH_NOUS_SOMMES_LIST_REQUEST, fetchNousSommesListSaga),
        takeLatest(PUT_UPDATE_STATE_NOUS_SOMMES_REQUEST, putUpdateStateNousSommesSaga),
        takeLatest(DELETE_NOUS_SOMMES_REQUEST, deleteNousSommesSaga),
        takeLatest(POST_NOUS_SOMMES_REQUEST, postNousSommesSaga),
        takeLatest(PUT_NOUS_SOMMES_REQUEST, putNousSommesSaga),
    ]);
}

export default nousSommesSaga;