import { DatePicker, Input } from "antd";
import dayjs from "dayjs";

import React, { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateCard } from "../../query/mutations/card";
import { taskQueryKeys } from "../../query/queryKeys";
// const dateFormat = "DD-MM-YYYY";

interface AddCardProps {
  taskId: string;
}
const AddCard: React.FC<AddCardProps> = ({ taskId }) => {
  const queryClient = useQueryClient();
  const { mutate } = useCreateCard();
  const [toCreate, setToCreate] = useState(false);
  const [cardname, setCardName] = useState("");
  const [cardDate, setCardDate] = useState(`${new Date()}`);

  const handleCreate = () => {
    mutate(
      { name: cardname, endDate: cardDate, taskOf: taskId },
      {
        onSuccess: () => {
          setToCreate(false);
          queryClient.invalidateQueries({ queryKey: taskQueryKeys.lists() });
        },
      }
    );
  };
  return (
    <div className="bg-black  h-fit text-sm text-[var(--color-grey-300)] p-2 min-w-[17rem] max-h-full rounded-lg ">
      {!toCreate ? (
        <div
          onClick={() => setToCreate((prev) => !prev)}
          className="text-center cursor-pointer p-3 hover:bg-[--color-grey-500-op-1] transition-all rounded-lg"
        >
          <p> + Add Card</p>
        </div>
      ) : (
        <div className="text-center p-3 flex flex-col">
          <Input
            autoFocus={toCreate}
            className="text-sm mb-2"
            placeholder="Card Name"
            size="small"
            onChange={(e) => setCardName(e.currentTarget.value)}
          />
          <DatePicker
            placeholder="Expire Date"
            size="small"
            showToday
            defaultValue={dayjs()}
            onChange={(_date, dateString) => {
              setCardDate(dateString);
            }}
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
export default AddCard;
