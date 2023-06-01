import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    deleteIntroductionNousRejoindre,
    fetchIntroductionNousRejoindre,
    fetchIntroductionNousRejoindreList,
    saveIntroductionNousRejoindre,
    updateIntroductionNousRejoindre,
    updateStateIntroductionNousRejoindre
} from "../../services/IntroductionNousRejoindreService";
import {IArticle} from "../../data/interfaces/IArticle";
import {
    fetchIntroductionNousRejoindreFailure,
    fetchIntroductionNousRejoindreListRequest,
    fetchIntroductionNousRejoindreListSuccess,
    fetchIntroductionNousRejoindreSuccess
} from "../actions/IntroductionNousRejoindreActions";
import {
    DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_REQUEST,
    FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST
} from "../types/ActionTypes";
import {PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE} from "../../data/constants/UrlApi";

function* fetchIntroductionNousRejoindreSaga({type, payload}: {
    type: typeof FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(fetchIntroductionNousRejoindre, payload);
        yield put(
            fetchIntroductionNousRejoindreSuccess({
                introductionNousRejoindre: response.data
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchIntroductionNousRejoindreFailure({
                error: e && e.message || 'FETCH_INTRODUCTION_NOUS_REJOINDRE_ERROR'
            })
        );
    }
}

function* fetchIntroductionNousRejoindreListSaga() {
    try {
        const response: AxiosResponse<IArticle[]> = yield call(fetchIntroductionNousRejoindreList);
        yield put(
            fetchIntroductionNousRejoindreListSuccess({
                introductionNousRejoindreList: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchIntroductionNousRejoindreFailure({
                error: e && e.message || 'FETCH_INTRODUCTION_NOUS_REJOINDRE_ERROR'
            })
        );
    }
}

function* putUpdateStateIntroductionNousRejoindreSaga({type, payload}: {
    type: typeof PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE,
    payload: IArticle
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateStateIntroductionNousRejoindre, payload);
        yield put(
            fetchIntroductionNousRejoindreSuccess({
                introductionNousRejoindre: response.data
            })
        );
        yield put(fetchIntroductionNousRejoindreListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchIntroductionNousRejoindreFailure({
                error: e && e.message || 'FETCH_INTRODUCTION_NOUS_REJOINDRE_ERROR'
            })
        );
    }
}

function* deleteIntroductionNousRejoindreSaga({type, payload}: {
    type: typeof DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(deleteIntroductionNousRejoindre, payload);
        yield put(
            fetchIntroductionNousRejoindreSuccess({
                introductionNousRejoindre: response.data
            })
        );
        yield put(fetchIntroductionNousRejoindreListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchIntroductionNousRejoindreFailure({
                error: e && e.message || 'FETCH_INTRODUCTION_NOUS_REJOINDRE_ERROR'
            })
        );
    }
}

function* putIntroductionNousRejoindreSaga({type, payload}: {
    type: typeof PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: IArticle
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateIntroductionNousRejoindre, payload);
        const introductionNousRejoindre = response.data;
        introductionNousRejoindre.status = "success";
        yield put(
            fetchIntroductionNousRejoindreSuccess({
                introductionNousRejoindre
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchIntroductionNousRejoindreFailure({
                error: e && e.message || 'FETCH_INTRODUCTION_NOUS_REJOINDRE_ERROR'
            })
        );
    }
}

function* postIntroductionNousRejoindreSaga({type, payload}: {
    type: typeof POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST,
    payload: IArticle
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(saveIntroductionNousRejoindre, payload);
        const introductionNousRejoindre = response.data;
        introductionNousRejoindre.status = "success";
        yield put(
            fetchIntroductionNousRejoindreSuccess({
                introductionNousRejoindre
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchIntroductionNousRejoindreFailure({
                error: e && e.message || 'FETCH_INTRODUCTION_NOUS_REJOINDRE_ERROR'
            })
        );
    }
}

function* introductionNousRejoindreSaga() {
    yield all([
        takeLatest(FETCH_INTRODUCTION_NOUS_REJOINDRE_REQUEST, fetchIntroductionNousRejoindreSaga),
        takeLatest(FETCH_INTRODUCTION_NOUS_REJOINDRE_LIST_REQUEST, fetchIntroductionNousRejoindreListSaga),
        takeLatest(PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE_REQUEST, putUpdateStateIntroductionNousRejoindreSaga),
        takeLatest(DELETE_INTRODUCTION_NOUS_REJOINDRE_REQUEST, deleteIntroductionNousRejoindreSaga),
        takeLatest(POST_INTRODUCTION_NOUS_REJOINDRE_REQUEST, postIntroductionNousRejoindreSaga),
        takeLatest(PUT_INTRODUCTION_NOUS_REJOINDRE_REQUEST, putIntroductionNousRejoindreSaga),
    ]);
}

export default introductionNousRejoindreSaga;