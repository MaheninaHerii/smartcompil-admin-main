import {AxiosResponse} from "axios";
import {
    GET_ALL_NOS_SERVICES_ET_PRODUITS,
    GET_NOS_SERVICES_ET_PRODUITS,
    PATH_NOS_SERVICES_ET_PRODUITS,
    PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS
} from "../data/constants/UrlApi";
import {IArticle} from "../data/interfaces/IArticle";
import {httpClient} from "../config/HttpClient";

export const fetchNosServicesEtProduitsList = (): Promise<AxiosResponse<IArticle[]>> =>
    httpClient.get(GET_ALL_NOS_SERVICES_ET_PRODUITS);
export const fetchNosServicesEtProduits = (id: number): Promise<AxiosResponse<IArticle>> =>
    httpClient.get(GET_NOS_SERVICES_ET_PRODUITS + '/' + id);
export const updateStateNosServicesEtProduits = (data: IArticle): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS, data);
export const deleteNosServicesEtProduits = (id: number): Promise<AxiosResponse<IArticle>> =>
    httpClient.delete(PATH_NOS_SERVICES_ET_PRODUITS + '/' + id);
export const saveNosServicesEtProduits = (data: FormData): Promise<AxiosResponse<IArticle>> =>
    httpClient.post(PATH_NOS_SERVICES_ET_PRODUITS, data);
export const updateNosServicesEtProduits = (data: FormData): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PATH_NOS_SERVICES_ET_PRODUITS, data);