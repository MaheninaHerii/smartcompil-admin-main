import {AxiosResponse} from "axios";
import {
    GET_ALL_POSTE, GET_ALL_POSTE_APPLY,
    GET_POSTE,
    PATH_POSTE, PUT_DUPLICATE_POSTE,
    PUT_UPDATE_STATE_POSTE
} from "../data/constants/UrlApi";
import {IPoste} from "../data/interfaces/IPoste";
import {httpClient} from "../config/HttpClient";
import {IApply} from "../data/interfaces/IApply";

export const fetchPosteList = (): Promise<AxiosResponse<IPoste[]>> =>
    httpClient.get(GET_ALL_POSTE);
export const fetchPoste = (id: number): Promise<AxiosResponse<IPoste>> =>
    httpClient.get(GET_POSTE + '/' + id);
export const updateStatePoste = (data: IPoste): Promise<AxiosResponse<IPoste>> =>
    httpClient.put(PUT_UPDATE_STATE_POSTE, data);
export const deletePoste = (id: number): Promise<AxiosResponse<IPoste>> =>
    httpClient.delete(PATH_POSTE + '/' + id);
export const savePoste = (data: IPoste): Promise<AxiosResponse<IPoste>> =>
    httpClient.post(PATH_POSTE, data);
export const updatePoste = (data: IPoste): Promise<AxiosResponse<IPoste>> =>
    httpClient.put(PATH_POSTE, data);
export const duplicatePoste = (data: IPoste): Promise<AxiosResponse<IPoste>> =>
    httpClient.put(PUT_DUPLICATE_POSTE, data);
export const fetchApply = (): Promise<AxiosResponse<IApply[]>> =>
    httpClient.get(GET_ALL_POSTE_APPLY);