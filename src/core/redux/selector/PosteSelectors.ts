import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.poste.pending

const posteList = (state: AppState) => state.poste.posteList;

const poste = (state: AppState) => state.poste.poste;

const apply = (state: AppState) => state.poste.apply;

const getError = (state: AppState) => state.poste.error;

export const getPosteListSelector = createSelector(posteList, (data) => data);

export const getPendingPosteSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorPosteSelector = createSelector(getError, (error) => error);

export const getPosteSelector = createSelector(poste, (data) => data);

export const getApplySelector = createSelector(apply, (data) => data);