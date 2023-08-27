import TaskCard from "./TaskCard";
import { TaskDataTypes } from "../../types/task-types";
import React from "react";
import AddCard from "../AddCard/AddCard";
import TaskMenuActions from "./TaskMenuActions";
interface TaskProps {
  task: TaskDataTypes;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  // const handleDropEnterEvent = (e: React.DragEvent) => {
  //   console.log(e, "ENTER");
  // };
  // todo
  const handleDropLeave = (e: React.DragEvent) => {
    e.preventDefault();
    // console.log(e);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    const droppedItem = e.dataTransfer.getData("card-item");
    console.log(droppedItem, task.id);
  };
  if (!task) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bg-black h-fit text-sm text-[var(--color-grey-300)] p-2 min-w-[17rem] max-h-full rounded-lg grid grid-cols-1 grid-rows-[auto,auto,1fr]">
      <TaskMenuActions task={task} />
      {/**card */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDropLeave}
        onDrop={handleDrop}
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
