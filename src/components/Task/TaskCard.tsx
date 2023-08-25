import React from "react";
import { FieldTimeOutlined } from "@ant-design/icons";

import { Cards } from "../../types/task-types";
import moment from "moment";
import styles from "./task.module.css";

interface TaskCardProps {
  card: Cards;
}
const dateFormat = "DD-MM-YYYY";

const TaskCard: React.FC<TaskCardProps> = ({ card }) => {
  const handleDragStart = (e: React.DragEvent) => {
    console.log(e);
  };
  const isExpiringToday =
    moment(Date.now()).format(dateFormat) ===
    moment(card.endDate).format(dateFormat);

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className=" drag break-words max-w-[17rem] cursor-move bg-[--color-grey-500-op-2] p-2 rounded-lg mr-1 relative"
    >
      <p className="mb-2">{card.name}</p>
      <div className="flex gap-2 items-center text-xs">
        <span className={`${styles[card.priority]} capitalize`}>
          {card.priority}
        </span>
        <span>{moment(card.createdAt).utc(true).format("MMM DD,YYYY")}</span>
        {card.endDate && (
          <span>{moment(card.endDate).utc(true).format("MMM DD,YYYY")}</span>
        )}
      </div>
      {isExpiringToday ? (
        <div className="absolute right-[-0.5rem] top-[-0.5rem] text-lg text-yellow-400">
          <FieldTimeOutlined />
        </div>
      ) : null}
    </div>
  );
};
export default TaskCard;
