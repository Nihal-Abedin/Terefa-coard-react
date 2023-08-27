import TaskCard from "./TaskCard";
import { Cards, TaskDataTypes } from "../../types/task-types";
import React from "react";
import AddCard from "../AddCard/AddCard";
import TaskMenuActions from "./TaskMenuActions";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../drag-item-types/dragItemTypes";
import { useMoveCard } from "../../query/mutations/card";
import { useQueryClient } from "@tanstack/react-query";
import { taskQueryKeys } from "../../query/queryKeys";

interface TaskProps {
  task: TaskDataTypes;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMoveCard();
  const handleDrop = (card: Cards) => {
    if (task.id === card._id) {
      return;
    }
    mutate(
      { cardId: card._id, taskOf: task.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: taskQueryKeys.lists() });
        },
      }
    );
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item: { card: Cards }) => handleDrop(item.card),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  console.log(isOver);
  if (!task) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bg-black h-fit text-sm text-[var(--color-grey-300)] p-2 min-w-[17rem] max-h-full rounded-lg grid grid-cols-1 grid-rows-[auto,auto,1fr]">
      <TaskMenuActions task={task} />
      {/**card */}
      <div
        ref={drop}
        // onDragLeave={handleDropEvent}
        className="grid grid-cols-1 p-2 grid-flow-row auto-rows-max gap-3 text-sm mb-3  min-h-fit overflow-y-auto  "
      >
        {task.cards.map((card) => (
          <TaskCard key={card._id} card={card} />
        ))}
      </div>
      {/**card */}
      <AddCard taskId={task.id} />
    </div>
  );
};

export default Task;
