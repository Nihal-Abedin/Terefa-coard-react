import { CardMovePayload, CardPayload, CardUpdatePayloadV2 } from "../types/task-types"
import { request } from "../utils/axiosInterceptorV2"
import { BASE_URL_APP } from "../utils/envVariables"

export const createCard = async (cardData: CardPayload) => {
    return request({ url: `${BASE_URL_APP}/task/${cardData.taskOf}/card`, method: 'post', data: cardData })
}
export const moveCard = async (cardData: CardMovePayload) => {
    return request({ url: `${BASE_URL_APP}/card/${cardData.cardId}`, method: 'patch', data: { taskOf: cardData.taskOf } })
}
export const updateCard = async (cardData: CardUpdatePayloadV2) => {
    return request({ url: `${BASE_URL_APP}/card/${cardData.cardId}`, method: 'patch', data: cardData.data })
}