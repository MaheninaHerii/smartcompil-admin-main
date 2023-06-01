import {AxiosResponse} from "axios";
import {
    GET_ALL_NOUS_SOMMES,
    GET_NOUS_SOMMES,
    PATH_NOUS_SOMMES,
    PUT_UPDATE_STATE_NOUS_SOMMES
} from "../data/constants/UrlApi";
import {IArticle} from "../data/interfaces/IArticle";
import {httpClient} from "../config/HttpClient";

export const fetchNousSommesList = (): Promise<AxiosResponse<IArticle[]>> =>
    httpClient.get(GET_ALL_NOUS_SOMMES);
export const fetchNousSommes = (id: number): Promise<AxiosResponse<IArticle>> =>
    httpClient.get(GET_NOUS_SOMMES + '/' + id);
export const updateStateNousSommes = (data: IArticle): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PUT_UPDATE_STATE_NOUS_SOMMES, data);
export const deleteNousSommes = (id: number): Promise<AxiosResponse<IArticle>> =>
    httpClient.delete(PATH_NOUS_SOMMES + '/' + id);
export const saveNousSommes = (data: FormData): Promise<AxiosResponse<IArticle>> =>
    httpClient.post(PATH_NOUS_SOMMES, data);
export const updateNousSommes = (data: FormData): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PATH_NOUS_SOMMES, data);