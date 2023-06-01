import {NosServicesEtProduitsActions, NosServicesEtProduitsState} from "../types/NosServicesEtProduitsTypes";
import {
    DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_FAILURE,
    FETCH_NOS_SERVICES_ET_PRODUITS_LIST_SUCCESS,
    FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST,
    FETCH_NOS_SERVICES_ET_PRODUITS_SUCCESS,
    POST_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_NOS_SERVICES_ET_PRODUITS_REQUEST,
    PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST
} from "../types/ActionTypes";

const initialState: NosServicesEtProduitsState = {
    pending: false,
    nosServicesEtProduitsList: [],
    error: null,
    nosServicesEtProduits: null
}

const nosServicesEtProduitsReducer = (state = initialState, action: NosServicesEtProduitsActions) => {
    switch (action.type) {
        case FETCH_NOS_SERVICES_ET_PRODUITS_REQUEST:
        case PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS_REQUEST:
        case PUT_NOS_SERVICES_ET_PRODUITS_REQUEST:
        case POST_NOS_SERVICES_ET_PRODUITS_REQUEST:
        case DELETE_NOS_SERVICES_ET_PRODUITS_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_NOS_SERVICES_ET_PRODUITS_SUCCESS:
            return {
                ...state,
                pending: false,
                nosServicesEtProduitsList: [],
                nosServicesEtProduits: action.payload.nosServicesEtProduits,
                error: null
            }
        case FETCH_NOS_SERVICES_ET_PRODUITS_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                nosServicesEtProduitsList: action.payload.nosServicesEtProduitsList,
                nosServicesEtProduits: null,
                error: null
            }
        case FETCH_NOS_SERVICES_ET_PRODUITS_FAILURE:
            return {
                ...state,
                pending: false,
                nosServicesEtProduitsList: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
};

export default nosServicesEtProduitsReducer;