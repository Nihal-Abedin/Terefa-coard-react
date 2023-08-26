import { EllipsisOutlined } from "@ant-design/icons";

import { useQueryClient } from "@tanstack/react-query";
import { useUpdateTask } from "../../query/mutations/tasks";
import { useState } from "react";
import { TaskDataTypes } from "../../types/task-types";
import { taskQueryKeys } from "../../query/queryKeys";
import { Dropdown, Input } from "antd";
import { useTableActions } from "../../hooks/useTableActions";

interface TaskActionProps {
  task: TaskDataTypes;
}

const TaskMenuActions: React.FC<TaskActionProps> = ({ task }) => {
  const querClient = useQueryClient();
  const { mutate } = useUpdateTask();
  const { taskActionItems, edit, setEdit } = useTableActions(task.id);
  const [taskData, setTaskName] = useState({ name: task.name });
  const handleNameUpdate = () => {
    if (task?.id && taskData.name) {
      mutate(
        { id: task.id, taskData },
        {
          onSuccess: () => {
            querClient.invalidateQueries({ queryKey: taskQueryKeys.lists() });
            setEdit(false);
          },
        }
      );
    }
  };
  return (
    <div className="flex justify-between items-center gap-2 p-3">
      {!edit ? (
        <p onClick={() => setEdit(!edit)} className="font-semibold w-full">
          {taskData.name}
        </p>
      ) : (
        <Input
          autoFocus={edit}
          className="text-sm bg-black text-white border-0 font-semibold p-0"
          defaultValue={taskData.name}
          onBlur={handleNameUpdate}
          onChange={(e) => setTaskName({ name: e.currentTarget.value })}
        />
      )}
      <Dropdown className="cursor-pointer" menu={{ items: taskActionItems }}>
        <EllipsisOutlined />
      </Dropdown>
    </div>
  );
};
export default TaskMenuActions;
