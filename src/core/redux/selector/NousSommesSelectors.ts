import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.nousSommes.pending

const nousSommesList = (state: AppState) => state.nousSommes.nousSommesList;

const nousSommes = (state: AppState) => state.nousSommes.nousSommes;

const getError = (state: AppState) => state.nousSommes.error;

export const getNousSommesListSelector = createSelector(nousSommesList, (data) => data);

export const getPendingNousSommesSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorNousSommesSelector = createSelector(getError, (error) => error);

export const getNousSommesSelector = createSelector(nousSommes, (data) => data);