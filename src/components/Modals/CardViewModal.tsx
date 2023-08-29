import { Form, Input, Modal, Select, DatePicker } from "antd";
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
import { taskQueryKeys } from "../../query/queryKeys";
import { TaskTypes } from "../../types/task-types";
import { useUpdateCard } from "../../query/mutations/card";
import { toast } from "react-toastify";
const dateFormat = "YYYY-MM-DD";

const CardViewModal: React.FC<ModalProps> = ({ open, onCancel }) => {
  const queryClient = useQueryClient();
  const { mutate } = useUpdateCard();
  const tasks: TaskTypes | undefined = queryClient.getQueryData(
    taskQueryKeys.lists()
  );
  const taskOptions =
    tasks &&
    tasks.data.map((task) => ({
      label: task.name,
      value: task.id,
    }));
  const { selectedCard } = useContext(BoardTemplateContext);
  const handleCardUpdate = (data: { [name: string]: string }) => {
    if (selectedCard)
      mutate(
        { cardId: selectedCard._id, data },
        {
          onSuccess: () => {
            toast.success("Card updated!");
            queryClient.invalidateQueries(taskQueryKeys.lists());
          },
        }
      );
  };
  const handleSelectChange = (value: string, name: string) => {
    handleCardUpdate({ [name]: value });
  };
  return (
    <Modal
      footer={false}
      title={
        <div className="flex items-center gap-4 text-base">
          <h2>{selectedCard?.name}</h2>
          <p className={selectedCard ? styles[selectedCard.priority] : ""}>
            {selectedCard?.priority}
          </p>
          <p
            className={
              selectedCard
                ? styles[selectedCard.status.split(" ").join("")]
                : ""
            }
          >
            {selectedCard?.status}
          </p>
        </div>
      }
      onCancel={onCancel}
      open={open}
    >
      <Form
        className="w-full flex flex-col gap-4"
        onBlurCapture={(e) => {
          if (!e.target.name || !e.target.value) return;
          handleCardUpdate({ [e.target.name]: e.target.value });
        }}
      >
        <div className="w-full flex flex-col gap-1">
          <p>Name</p>
          <Input
            placeholder="Card Name"
            name="name"
            defaultValue={selectedCard?.name}
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
              defaultValue={selectedCard?.priority.toLowerCase()}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p>Timespan</p>
            <RangePicker
              name="endDate"
              defaultValue={[
                dayjs(selectedCard?.createdAt, dateFormat),
                dayjs(selectedCard?.endDate, dateFormat),
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
              defaultValue={selectedCard?.status.toLowerCase()}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p>Move to</p>
            <Select
              onChange={(value: string) => handleSelectChange(value, "taskOf")}
              options={taskOptions}
              defaultValue={selectedCard?.taskOf}
            />
          </div>
        </div>

        {/* <Button type="primary">Update</Button> */}
      </Form>
    </Modal>
  );
};
export default CardViewModal;
