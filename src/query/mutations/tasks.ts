import { useMutation } from "@tanstack/react-query"
import { createTask, deleteTask, updateTask } from "../../api/task"

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
export const useDeleteTask = () => {
    return useMutation((id: string) => {
        return deleteTask(id);
    })
}