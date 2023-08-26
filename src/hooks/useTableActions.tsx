import type { MenuProps } from "antd";
import { useState } from "react";
import { useDeleteTask } from "../query/mutations/tasks";
import { useQueryClient } from "@tanstack/react-query";
import { taskQueryKeys } from "../query/queryKeys";

export const useTableActions = (id: string) => {
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(false);
  const { mutate: deleteTask } = useDeleteTask();

  const taskActionItems: MenuProps["items"] = [
    {
      label: "Delete",
      key: "delete",
      danger: true,
      onClick: () => {
        deleteTask(id, {
          onSuccess() {
            queryClient.invalidateQueries(taskQueryKeys.lists());
          },
        });
      },
    },
    {
      label: "Rename",
      key: "rename",
      onClick: () => setEdit((prev) => !prev),
    },
  ];
  return { taskActionItems, edit, setEdit };
};
