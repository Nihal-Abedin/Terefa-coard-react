import axios, { AxiosResponse, AxiosError } from "axios";
import { BASE_URL_APP } from "./envVariables";
import { ErrorResponseCustom } from "../types/errorRespose-types";
export interface ErrorResponseAxios {
    message: string;
    error: ErrorResponseCustom

}
const client = axios.create({
    baseURL: BASE_URL_APP, // Set your API base URL
    headers: { "Content-Type": "application/json" }
})
const token = localStorage.getItem("TERAFE_TOKEN") || ''
export const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
    const onSuccess = (res: AxiosResponse) => res.data;
    const onError = (err: AxiosError<ErrorResponseAxios>) => {
        if (err.response?.status === 401) {
            console.log(err)
            return Promise.reject({
                message: err.response.data.message,
                errors: err.response.data.error
            })
        }
        return err.response?.data;
    }

    return client(options).then(onSuccess).catch(onError)
}