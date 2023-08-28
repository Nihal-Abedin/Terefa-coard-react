import { Form, Input, Modal, Select, DatePicker, Button } from "antd";
import { ModalProps } from "../../types/modalTypes";
import { useContext } from "react";
import { BoardTemplateContext } from "../BoardTemplate/BoardTemplate";
import {
  priorityOptions,
  statusOptions,
} from "../../utils/select/cardSelectOptions";
const { RangePicker } = DatePicker;
import dayjs from "dayjs";
import { useQueryClient } from "@tanstack/react-query";
import { taskQueryKeys } from "../../query/queryKeys";
import { TaskTypes } from "../../types/task-types";
const dateFormat = "YYYY-MM-DD";
const CardViewModal: React.FC<ModalProps> = ({ open, onCancel }) => {
  const queryClient = useQueryClient();
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
  console.log(selectedCard);
  return (
    <Modal title={selectedCard?.name} onCancel={onCancel} open={open}>
      <Form
        initialValues={{ remember: true }}
        onBlur={() => console.log("Focus Leaved")}
      >
        <Form.Item>
          <Input placeholder="Card Name" defaultValue={selectedCard?.name} />
        </Form.Item>
        <Form.Item>
          <Select
            options={priorityOptions}
            defaultValue={[selectedCard?.priority.toLowerCase()]}
          />
        </Form.Item>
        <Form.Item>
          <RangePicker
            defaultValue={[
              dayjs(selectedCard?.createdAt, dateFormat),
              dayjs(selectedCard?.endDate, dateFormat),
            ]}
            disabled={[true, false]}
          />
        </Form.Item>
        {/* <p>
          Card of : <span>{selectedCard?.taskOf}</span>
        </p> */}
        <Form.Item label={"status"}>
          <Select
            options={statusOptions}
            defaultValue={[selectedCard?.status.toLowerCase()]}
          />
        </Form.Item>
        <Form.Item label={"move to"}>
          <Select options={taskOptions} defaultValue={[selectedCard?.taskOf]} />
        </Form.Item>
        <Button>Update</Button>
      </Form>
    </Modal>
  );
};
export default CardViewModal;
