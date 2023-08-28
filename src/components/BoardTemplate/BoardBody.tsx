// import { TaskTypes } from "../../types/task-types";
import { useContext } from "react";
import AddTask from "../AddTask.tsk/AddTask";
import Task from "../Task/Task";
import { BoardTemplateContext } from "./BoardTemplate";
import { useModalStore } from "../../store/ModalStore";
import CardViewModal from "../Modals/CardViewModal";
// export interface BoardBodyProps {
//   tasks: TaskTypes[] | undefined;
// }
const BoardBody: React.FC = () => {
  const { task } = useContext(BoardTemplateContext);
  const handleModalOpen = useModalStore((set) => set.handleModalOpen);
  const modalNames = useModalStore((set) => set.modalNames);
  return (
    <>
      {modalNames.crateViewModal ? (
        <CardViewModal
          open={modalNames.crateViewModal}
          onCancel={() => handleModalOpen({ crateViewModal: false })}
        />
      ) : null}
      <div className="py-3 px-2 backdrop-blur-sm overflow-x-auto overflow-y-hidden grid grid-flow-col  auto-cols-max grid-rows-1 gap-4 min-h-full transition-all">
        {/* <Task /> */}

        {task && task.map((task, i) => <Task key={i} task={task} />)}
        <AddTask />
      </div>
    </>
  );
};

export default BoardBody;
