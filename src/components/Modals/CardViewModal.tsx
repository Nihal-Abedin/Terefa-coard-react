import { Form, Input, Modal, Select, DatePicker, Button, Spin } from "antd";
import { ModalProps } from "../../types/modalTypes";
import { useContext } from "react";
import { BoardTemplateContext } from "../BoardTemplate/BoardTemplate";
import {
  priorityOptions,
  statusOptions,
} from "../../utils/select/cardSelectOptions";
import styles from "../Task/task.module.css";

const { RangePicker } = DatePicker;
import dayjs from "dayjs";
import { useQueryClient } from "@tanstack/react-query";
import { cardQueryKeys, taskQueryKeys } from "../../query/queryKeys";
import { TaskTypes } from "../../types/task-types";
import { useDeleteCard, useUpdateCard } from "../../query/mutations/card";
import { toast } from "react-toastify";
import { useCard } from "../../query/queries/cards";
const dateFormat = "YYYY-MM-DD";

const CardViewModal: React.FC<ModalProps> = ({ open, onCancel }) => {
  const { selectedCardId } = useContext(BoardTemplateContext);
  const queryClient = useQueryClient();
  const { mutate } = useUpdateCard();
  const { mutate: deleteCard } = useDeleteCard();
  const { data: card, isLoading } = useCard(`${selectedCardId}`)
  const cardData = card?.data;
  const tasks: TaskTypes | undefined = queryClient.getQueryData(
    taskQueryKeys.lists()
  );
  const taskOptions =
    tasks &&
    tasks.data.map((task) => ({
      label: task.name,
      value: task.id,
    }));
  const handleCardUpdate = (data: { [name: string]: string }) => {
    if (selectedCardId)
      mutate(
        { cardId: selectedCardId, data },
        {
          onSuccess: ({ data }) => {
            console.log(data, "Card Update Data")
            toast.success("Card updated!");
            queryClient.invalidateQueries(taskQueryKeys.lists());
            queryClient.invalidateQueries(cardQueryKeys.single(selectedCardId));
          },
        }
      );
  };
  
  const handleSelectChange = (value: string, name: string) => {
    handleCardUpdate({ [name]: value });
  };
  return (
    <Modal
      footer={<Button danger onClick={() => {
        deleteCard(`${selectedCardId}`, {
          onSuccess: () => {
            toast.success("Card deleted!");
            queryClient.invalidateQueries(taskQueryKeys.lists());
            onCancel();
          }
        })
      }} type="primary">Delete</Button>}
      title={
        <div className="flex items-center gap-4 text-base">
          <h2>{cardData?.name}</h2>
          <p className={cardData ? styles[cardData.priority] : ""}>
            {cardData?.priority}
          </p>
          <p
            className={
              cardData
                ? styles[cardData?.status.split(' ').join('')]
                : ""
            }
          >
            {cardData?.status}
          </p>
        </div>
      }
      onCancel={onCancel}
      open={open}
    >
      {isLoading?<Spin/>:<Form
        className="w-full flex flex-col gap-4"
        onBlurCapture={(e) => {
          if (!e.target.name || !e.target.value) return;
          handleCardUpdate({ [e.target.name]: e.target.value });
        }}
      >
        <div className="w-full flex flex-col gap-1">
          <p>Name</p>
          <Input
            placeholder="CardData Name"
            name="name"
            defaultValue={cardData?.name}
          />
        </div>
        <div className="w-full flex gap-2">
          <div className="w-full flex flex-col gap-1">
            <p>Priority</p>
            <Select
              onChange={(value: string) =>
                handleSelectChange(value, "priority")
              }
              options={priorityOptions}
              defaultValue={cardData?.priority.toLowerCase()}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p>Timespan</p>
            <RangePicker
              name="endDate"
              defaultValue={[
                dayjs(cardData?.createdAt, dateFormat),
                dayjs(cardData?.endDate, dateFormat),
              ]}
              disabled={[true, false]}
              onChange={(_date, dateString) => {
                handleCardUpdate({ endDate: dateString[1] });
              }}
            />
          </div>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-full flex flex-col gap-1">
            <p>Status</p>
            <Select
              onChange={(value: string) => handleSelectChange(value, "status")}
              options={statusOptions}
              defaultValue={cardData?.status.toLowerCase()}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p>Move to</p>
            <Select
              onChange={(value: string) => handleSelectChange(value, "taskOf")}
              options={taskOptions}
              defaultValue={cardData?.taskOf}
            />
          </div>
        </div>

        {/* <Button type="primary">Update</Button> */}
      </Form>}
    </Modal>
  );
};
export default CardViewModal;
