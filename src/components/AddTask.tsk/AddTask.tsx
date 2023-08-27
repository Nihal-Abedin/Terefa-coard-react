import { Input } from "antd";
import { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useCreateTask } from "../../query/mutations/tasks";
import { useQueryClient } from "@tanstack/react-query";
import { taskQueryKeys } from "../../query/queryKeys";

const AddTask = () => {
  const queryClient = useQueryClient();
  const [toCreate, setToCreate] = useState(false);
  const [taskData, setTaskName] = useState({ name: "" });

  const { mutate } = useCreateTask();
  const handleCreate = () => {
    mutate(taskData, {
      onSuccess: () => {
        setToCreate(false);
        queryClient.invalidateQueries({ queryKey: taskQueryKeys.lists() });
      },
    });
  };
  return (
    <div className="bg-[var(--color-grey-500-op-1)]  h-fit text-sm text-white p-2 min-w-[17rem] max-h-full rounded-lg ">
      {!toCreate ? (
        <div
          onClick={() => setToCreate((prev) => !prev)}
          className="text-center cursor-pointer p-3 hover:bg-[--color-grey-500-op-1] transition-all rounded-lg"
        >
          <p> + Create Task</p>
        </div>
      ) : (
        <div className="text-center p-3 flex flex-col">
          <Input
            autoFocus={toCreate}
            className="text-sm font-semibold "
            placeholder="Task Name"
            // onBlur={handleNameUpdate}
            onChange={(e) => setTaskName({ name: e.currentTarget.value })}
          />
          <div className="w-full flex justify-end gap-1 mt-2">
            <div
              onClick={() => setToCreate((prev) => !prev)}
              className="w-3 h-3 text-red-500 bg-red-200 cursor-pointer p-3 flex justify-center items-center rounded-md "
            >
              <CloseOutlined />
            </div>
            <div
              onClick={handleCreate}
              className="w-3 h-3 text-green-500 bg-green-200 cursor-pointer p-3 flex justify-center items-center rounded-md"
            >
              <CheckOutlined />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddTask;
