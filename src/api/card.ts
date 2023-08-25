import { CardPayload } from "../types/task-types"
import { request } from "../utils/axiosInterceptorV2"
import { BASE_URL_APP } from "../utils/envVariables"

export const createCard = async (cardData: CardPayload) => {
    return request({ url: `${BASE_URL_APP}/task/${cardData.taskOf}/card`, method: 'post', data: cardData })
}