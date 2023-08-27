import React from "react";
import { FieldTimeOutlined, EyeOutlined } from "@ant-design/icons";

import { Cards } from "../../types/task-types";
import moment from "moment";
import styles from "./task.module.css";
import { isInThePast, isToday } from "../../utils/dateParser";

interface TaskCardProps {
  card: Cards;
}
// const dateFormat = "DD-MM-YYYY";

const TaskCard: React.FC<TaskCardProps> = ({ card }) => {
  const handleDragStart = (e: React.DragEvent) => {
    console.log(e);
    console.log("START");
    e.dataTransfer.setData("card-item", card._id);

    // const image: JSX.Element = <>HI</>; // <== whatever you want here
    // const target = e.currentTarget as HTMLElement;
    // const ghost = document.createElement(target);
    // target.style.transform = "translate(-10000px, -10000px)";
    // ghost.style.position = "absolute";
    // document.body.appendChild(ghost);
    // if (target) e.dataTransfer.setDragImage(target, 0, 0);
    // e.dataTransfer.dropEffect

    // ReactDOM.createPortal(image, ghost);
  };
  const isExpiringToday =
    new Date().getTime() > new Date(card.endDate).getTime();
  console.log(isToday(new Date(card.endDate), new Date()), "IS TODAY");
  const isExpired = isInThePast(new Date(card.endDate));
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className=" drag break-words max-w-[17rem] cursor-grab bg-[--color-grey-500-op-2] p-2 rounded-lg mr-1 relative"
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
