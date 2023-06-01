import {AxiosResponse} from "axios";
import {
    PATH_CONTACTEZ_NOUS
} from "../data/constants/UrlApi";
import {IContactezNous} from "../data/interfaces/IContactezNous";
import {httpClient} from "../config/HttpClient";

export const fetchContactezNous = (): Promise<AxiosResponse<IContactezNous>> =>
    httpClient.get(PATH_CONTACTEZ_NOUS);
export const updateContactezNous = (data: IContactezNous): Promise<AxiosResponse<IContactezNous>> =>
    httpClient.put(PATH_CONTACTEZ_NOUS, data);