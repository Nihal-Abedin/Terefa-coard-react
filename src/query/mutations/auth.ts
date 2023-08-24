import { useMutation } from "@tanstack/react-query";
import { LoginFormTypes, SignupFormTypes } from "../../types/authentication-types";
import { login, signup } from "../../api/auth";
import { AxiosError } from "axios";
import { ErrorResponseAxios } from "../../utils/axiosInterceptorV2";
// import { ErrorResponseAxios } from "../../utils/axiosInterceptorV2";
// import { AxiosError } from "axios";

export const useLogin = () => {
    return useMutation<{ message: string, token: string }, AxiosError<ErrorResponseAxios>, LoginFormTypes>((data) => {
        return login(data)
    })
}

export const useSignup = () => {
    return useMutation<{ message: string, token: string }, AxiosError<ErrorResponseAxios>, SignupFormTypes>((data) => {
        return signup(data)
    })
}