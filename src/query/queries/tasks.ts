import { useQuery } from "@tanstack/react-query"
import { getTasks } from "../../api/task"
import { taskQueryKeys } from "../queryKeys"
import { TaskTypes } from "../../types/task-types"

export const useTasks = () => {
    return useQuery<TaskTypes>({
        queryKey: taskQueryKeys.lists(),
        queryFn: () => getTasks(),
    })
}