import { useMutation } from "@tanstack/react-query"
import { updateTask } from "../../api/task"

export const useUpdateTask = () => {
    return useMutation((data: { id: string, taskData: { name: string } }) => {
        return updateTask(data.id, data.taskData);
    })
}