import { useMutation } from "@tanstack/react-query";
import { createCard, moveCard, updateCard } from "../../api/card";
import { CardMovePayload, CardPayload, CardUpdatePayloadV2 } from "../../types/task-types";

export const useCreateCard = () => {
    return useMutation((data: CardPayload) => {
        return createCard(data);
    })
}
export const useMoveCard = () => {
    return useMutation((data: CardMovePayload) => {
        return moveCard(data);
    })
}
export const useUpdateCard = () => {
    return useMutation((data: CardUpdatePayloadV2) => {
        return updateCard(data)
    })
}
/**
 * import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCard } from "../../api/card";
import { CardPayload, Cards, TaskTypes } from "../../types/task-types";
import { taskQueryKeys } from "../queryKeys";

export const useCreateCard = () => {
    const queryClient = useQueryClient()

    return useMutation((data: CardPayload) => {
        return createCard(data);
    }, {
        onMutate: async (newCard) => {
            console.log(newCard)
            // Cancel any outgoing refetches
            // (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey: taskQueryKeys.all })

            // Snapshot the previous value
            const previous = queryClient.getQueryData(taskQueryKeys.lists()) as TaskTypes;

            previous.data.forEach(d => {
                if (d.id === newCard.taskOf) {
                    d.cards.push(newCard as Cards)
                }
            })
            // console.log(previous, "PREV")
            // const todoTOUpdate = previous.data.filter(d => d.id === newCard.taskOf)[0]
            // console.log(todoTOUpdate, "TO UPDATE")
            // // console.group(todoTOUpdate)
            // todoTOUpdate.cards.push(newCard as Cards)
            console.log(previous)
            queryClient.setQueryData(taskQueryKeys.lists(), () => previous)

        },
        onError: () => {
            const prev = queryClient.getQueryData(taskQueryKeys.lists())
            queryClient.setQueryData(taskQueryKeys.lists(), prev)
        },
    })
}
 */