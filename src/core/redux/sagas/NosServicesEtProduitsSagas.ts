import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    deleteNosServicesEtProduits,
    fetchNosServicesEtProduits,
    fetchNosServicesEtProduitsList,
    saveNosServicesEtProduits,
    updateNosServicesEtProduits,
    updateStateNosServicesEtProduits
} from "../../services/NosServicesEtProduitsService";
import {IArticle} from "../../data/interfaces/IArticle";
import {
    fetchNosServicesEtProduitsFailure,
    fetchNosServicesEtProduitsListRequest,
    fetchNosServicesEtProduitsListSuccess,
    fetchNosServicesEtProduitsSuccess
} from "../actions/NosServicesEtProduitsActions";
import {
    DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_LIST_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST,
    POST_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST
} from "../types/ActionTypes";
import {PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS} from "../../data/constants/UrlApi";

function* fetchNosServicesEtProduitsSaga({type, payload}: {
    type: typeof FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(fetchNosServicesEtProduits, payload);
        yield put(
            fetchNosServicesEtProduitsSuccess({
                nosServicesEtProduits: response.data
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNosServicesEtProduitsFailure({
                error: e && e.message || 'FETCH_NOS_SERVICES_ET_PRODUITS_ERROR'
            })
        );
    }
}

function* fetchNosServicesEtProduitsListSaga() {
    try {
        const response: AxiosResponse<IArticle[]> = yield call(fetchNosServicesEtProduitsList);
        yield put(
            fetchNosServicesEtProduitsListSuccess({
                nosServicesEtProduitsList: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchNosServicesEtProduitsFailure({
                error: e && e.message || 'FETCH_NOS_SERVICES_ET_PRODUITS_ERROR'
            })
        );
    }
}

function* putUpdateStateNosServicesEtProduitsSaga({type, payload}: {
    type: typeof PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS,
    payload: IArticle
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateStateNosServicesEtProduits, payload);
        yield put(
            fetchNosServicesEtProduitsSuccess({
                nosServicesEtProduits: response.data
            })
        );
        yield put(fetchNosServicesEtProduitsListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNosServicesEtProduitsFailure({
                error: e && e.message || 'FETCH_NOS_SERVICES_ET_PRODUITS_ERROR'
            })
        );
    }
}

function* deleteNosServicesEtProduitsSaga({type, payload}: {
    type: typeof DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(deleteNosServicesEtProduits, payload);
        yield put(
            fetchNosServicesEtProduitsSuccess({
                nosServicesEtProduits: response.data
            })
        );
        yield put(fetchNosServicesEtProduitsListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNosServicesEtProduitsFailure({
                error: e && e.message || 'FETCH_NOS_SERVICES_ET_PRODUITS_ERROR'
            })
        );
    }
}

function* putNosServicesEtProduitsSaga({type, payload}: {
    type: typeof PUT_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: FormData
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateNosServicesEtProduits, payload);
        const nosServicesEtProduits = response.data;
        nosServicesEtProduits.status = "success";
        yield put(
            fetchNosServicesEtProduitsSuccess({
                nosServicesEtProduits
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNosServicesEtProduitsFailure({
                error: e && e.message || 'FETCH_NOS_SERVICES_ET_PRODUITS_ERROR'
            })
        );
    }
}

function* postNosServicesEtProduitsSaga({type, payload}: {
    type: typeof POST_NOS_SERVICES_ET_PRODUITS_REQUEST,
    payload: FormData
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(saveNosServicesEtProduits, payload);
        const nosServicesEtProduits = response.data;
        nosServicesEtProduits.status = "success";
        yield put(
            fetchNosServicesEtProduitsSuccess({
                nosServicesEtProduits
            })
        );
        yield put(fetchNosServicesEtProduitsListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchNosServicesEtProduitsFailure({
                error: e && e.message || 'FETCH_NOS_SERVICES_ET_PRODUITS_ERROR'
            })
        );
    }
}

function* nosServicesEtProduitsSaga() {
    yield all([
        takeLatest(FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST, fetchNosServicesEtProduitsSaga),
        takeLatest(FETCH_NOS_SERVICES_ET_PRODUITS_LIST_REQUEST, fetchNosServicesEtProduitsListSaga),
        takeLatest(PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST, putUpdateStateNosServicesEtProduitsSaga),
        takeLatest(DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST, deleteNosServicesEtProduitsSaga),
        takeLatest(POST_NOS_SERVICES_ET_PRODUITS_REQUEST, postNosServicesEtProduitsSaga),
        takeLatest(PUT_NOS_SERVICES_ET_PRODUITS_REQUEST, putNosServicesEtProduitsSaga),
    ]);
}

export default nosServicesEtProduitsSaga;