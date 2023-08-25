import { useMutation } from "@tanstack/react-query";
import { createCard } from "../../api/card";
import { CardPayload } from "../../types/task-types";

export const useCreateCard = () => {
    return useMutation((data: CardPayload) => {
        return createCard(data);
    })
}