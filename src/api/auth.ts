import { LoginFormTypes, SignupFormTypes, } from "../types/authentication-types"
import { request } from "../utils/axiosInterceptorV2";
// import instance from "../utils/axiosInterceptor"
import { BASE_URL_APP } from "../utils/envVariables";

export const login = async (loginData: LoginFormTypes) => {
    // const { data } = await request.post(`${BASE_URL_APP}/auth/login`, loginData);
    return request({ url: `${BASE_URL_APP}/auth/login`, method: 'post', data: loginData })

}
export const signup = async (signupData: SignupFormTypes) => {
    return request({ url: `${BASE_URL_APP}/auth/signup`, method: 'post', data: signupData })

}