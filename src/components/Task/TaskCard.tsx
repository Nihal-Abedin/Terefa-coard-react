import React from "react";
import { FieldTimeOutlined, EyeOutlined } from "@ant-design/icons";

import { Cards } from "../../types/task-types";
import moment from "moment";
import styles from "./task.module.css";
import { isInThePast, isToday } from "../../utils/dateParser";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../drag-item-types/dragItemTypes";

interface TaskCardProps {
  card: Cards;
}
// const dateFormat = "DD-MM-YYYY";

const TaskCard: React.FC<TaskCardProps> = ({ card }) => {
  const isExpiringToday = isToday(new Date(card.endDate), new Date());
  const isExpired = isInThePast(new Date(card.endDate));
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        // position: isDragging ? "absolute" : "relative",
      }}
      className={` drag break-words max-w-[17rem] cursor-grab bg-[--color-grey-500-op-2] p-2 rounded-lg mr-1 relative`}
    >
      <p className="mb-2 ">
        {card.name}
        <EyeOutlined className="text-xs ml-2" />
      </p>
      <div className="flex gap-2 items-center justify-between text-[0.6rem]">
        <span className={`${styles[card.priority]} capitalize`}>
          {card.priority}
        </span>
        <div className="flex justify-end items-center w-full gap-2">
          <span>{moment(card.createdAt).utc(true).format("MMM DD,YYYY")}</span>
          {isExpiringToday && !isExpired ? (
            <span className={`${styles[card.priority]}`}> Ends Today</span>
          ) : isExpired ? (
            <span className={`${styles.high}`}> Expired</span>
          ) : (
            <span>{moment(card.endDate).utc(true).format("MMM DD,YYYY")}</span>
          )}
        </div>
      </div>
      {isExpiringToday ? (
        <div
          className={`absolute cursor-pointer right-[-0.5rem] top-[-0.5rem] text-lg ${
            isExpired ? "text-red-500" : "text-yellow-400"
          }`}
        >
          <FieldTimeOutlined />
        </div>
      ) : null}
    </div>
  );
};
export default TaskCard;
