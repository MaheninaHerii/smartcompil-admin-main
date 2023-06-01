import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.introductionNousRejoindre.pending

const introductionNousRejoindreList = (state: AppState) => state.introductionNousRejoindre.introductionNousRejoindreList;

const introductionNousRejoindre = (state: AppState) => state.introductionNousRejoindre.introductionNousRejoindre;

const getError = (state: AppState) => state.introductionNousRejoindre.error;

export const getIntroductionNousRejoindreListSelector = createSelector(introductionNousRejoindreList, (data) => data);

export const getPendingIntroductionNousRejoindreSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorIntroductionNousRejoindreSelector = createSelector(getError, (error) => error);

export const getIntroductionNousRejoindreSelector = createSelector(introductionNousRejoindre, (data) => data);