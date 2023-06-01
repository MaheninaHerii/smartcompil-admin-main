import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.nosServicesEtProduits.pending

const nosServicesEtProduitsList = (state: AppState) => state.nosServicesEtProduits.nosServicesEtProduitsList;

const nosServicesEtProduits = (state: AppState) => state.nosServicesEtProduits.nosServicesEtProduits;

const getError = (state: AppState) => state.nosServicesEtProduits.error;

export const getNosServicesEtProduitsListSelector = createSelector(nosServicesEtProduitsList, (data) => data);

export const getPendingNosServicesEtProduitsSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorNosServicesEtProduitsSelector = createSelector(getError, (error) => error);

export const getNosServicesEtProduitsSelector = createSelector(nosServicesEtProduits, (data) => data);