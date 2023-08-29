import React, { useContext, useState } from "react";
import { FieldTimeOutlined, EyeOutlined } from "@ant-design/icons";

import { Cards } from "../../types/task-types";
import moment from "moment";
import styles from "./task.module.css";
import { isInThePast, isToday } from "../../utils/dateParser";
import { useModalStore } from "../../store/ModalStore";
import { BoardTemplateContext } from "../BoardTemplate/BoardTemplate";

interface TaskCardProps {
  card: Cards;
}
// const dateFormat = "DD-MM-YYYY";

const TaskCard: React.FC<TaskCardProps> = ({ card }) => {
  const { setSelectedCard } = useContext(BoardTemplateContext);
  const handleModalOpen = useModalStore((state) => state.handleModalOpen);
  const [isDragging, setIsDragging] = useState(false);
  const isExpiringToday = isToday(new Date(card.endDate), new Date());
  const isExpired = isInThePast(new Date(card.endDate));
  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    e.dataTransfer.setData("card-item", card._id);

    const ghost = document.createElement("div");
    e.dataTransfer.setDragImage(ghost, 0, 0);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        opacity: isDragging ? "0.5" : "1",
      }}
      className=" drag break-words max-w-[17rem] cursor-grab bg-[--color-grey-500-op-2] p-2 rounded-lg mr-1 relative"
    >
      <p className="mb-2  ">
        {card.name}
        <EyeOutlined
          className="text-xs ml-2 cursor-pointer"
          onClick={() => {
            handleModalOpen({ crateViewModal: true });
            setSelectedCard(card);
          }}
        />
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
