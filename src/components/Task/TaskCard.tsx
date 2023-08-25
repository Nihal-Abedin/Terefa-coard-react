import React from "react";
import { Cards } from "../../types/task-types";

interface TaskCardProps {
  card: Cards;
}
const TaskCard: React.FC<TaskCardProps> = ({ card }) => {
  const handleDragStart = (e: React.DragEvent) => {
    console.log(e);
  };
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className=" drag break-words max-w-[17rem] bg-[--color-grey-500-op-2] p-2 rounded-lg mr-1"
    >
      <p>{card.name}</p>
      <span className="text-[0.7rem] bg-red-500 py-[0.1rem] px-2 rounded-xl">
        {card.priority}
      </span>
    </div>
  );
};
export default TaskCard;
