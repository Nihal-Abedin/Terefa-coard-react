import { useMutation } from "@tanstack/react-query"
import { createTask, updateTask } from "../../api/task"

export const useUpdateTask = () => {
    return useMutation((data: { id: string, taskData: { name: string } }) => {
        return updateTask(data.id, data.taskData);
    })
}

export const useCreateTask = () => {
    return useMutation((data: { name: string }) => {
        return createTask(data);
    })
}