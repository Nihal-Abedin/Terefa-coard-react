import { request } from "../utils/axiosInterceptorV2";
import { BASE_URL_APP } from "../utils/envVariables";

export const getTasks = async () => {
    return request({ url: `${BASE_URL_APP}/task`, method: 'get' })
}

export const updateTask = async (id: string, taskUpdataData: { name: string }) => {
    return request({ url: `${BASE_URL_APP}/task/${id}`, method: 'patch', data: taskUpdataData })
}
export const createTask = async (taskData: { name: string }) => {
    return request({ url: `${BASE_URL_APP}/task/`, method: 'post', data: taskData })
}

export const deleteTask = async (id: string) => {
    return request({ url: `${BASE_URL_APP}/task/${id}`, method: 'delete' })

}