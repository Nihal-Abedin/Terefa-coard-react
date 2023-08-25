import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import TaskCard from "./TaskCard";
import { TaskDataTypes } from "../../types/task-types";
import React, { useState } from "react";
import { Input } from "antd";
import { useUpdateTask } from "../../query/mutations/tasks";
import { useQueryClient } from "@tanstack/react-query";
import { taskQueryKeys } from "../../query/queryKeys";
import AddCard from "../AddCard/AddCard";
interface TaskProps {
  task: TaskDataTypes;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const querClient = useQueryClient();
  const { mutate } = useUpdateTask();
  const [edit, setEdit] = useState(false);
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
  const handleDropEvent = (e: React.DragEvent) => {
    console.log(e, "DROP");
  };
  // const handleDropEnterEvent = (e: React.DragEvent) => {
  //   console.log(e, "ENTER");
  // };
  // todo
  if (!task) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bg-black h-fit text-sm text-[var(--color-grey-300)] p-2 min-w-[17rem] max-h-full rounded-lg grid grid-cols-1 grid-rows-[auto,auto,1fr]">
      <div className="flex justify-between items-center gap-2 p-3">
        {!edit ? (
          <p className="font-semibold ">{taskData.name}</p>
        ) : (
          <Input
            autoFocus={edit}
            className="text-sm bg-black text-white border-0 font-semibold p-0"
            defaultValue={taskData.name}
            onBlur={handleNameUpdate}
            onChange={(e) => setTaskName({ name: e.currentTarget.value })}
          />
        )}
        {!edit ? (
          <EditOutlined onClick={() => setEdit(!edit)} />
        ) : (
          <CheckOutlined onClick={() => setEdit(!edit)} />
        )}
      </div>
      {/**card */}
      <div
        onDragLeave={handleDropEvent}
        className="grid grid-cols-1 p-2 grid-flow-row auto-rows-max gap-3 text-sm mb-3  min-h-fit overflow-y-auto "
      >
        {task?.cards.map((card) => (
          <TaskCard key={card._id} card={card} />
        ))}
      </div>
      {/**card */}
      <AddCard taskId={task.id} />
    </div>
  );
};

export default Task;
