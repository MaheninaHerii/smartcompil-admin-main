import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.security.pending

const authResponse = (state: AppState) => state.security.authResponse;

const getError = (state: AppState) => state.security.error;

export const getAuthSelector = createSelector(authResponse, (token) => token);

export const getPendingAuthSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorAuthSelector = createSelector(getError, (error) => error);