import { useQuery } from "@tanstack/react-query";
import { getCard } from "../../api/card";
import { cardQueryKeys } from "../queryKeys";

export const useCard = (id?: string) => {
    return useQuery({
        queryKey: cardQueryKeys.single(id || ''),
        queryFn: () => getCard(id || '')
    })
}