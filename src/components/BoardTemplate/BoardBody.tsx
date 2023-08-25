import { TaskTypes } from "../../types/task-types";
import Task from "../Task/Task";
export interface BoardBodyProps {
  tasks: TaskTypes | undefined;
}
const BoardBody: React.FC<BoardBodyProps> = ({ tasks }) => {
  return (
    <div className="py-3 px-2 backdrop-blur-sm overflow-x-auto overflow-y-hidden grid grid-flow-col  auto-cols-max grid-rows-1 gap-4 min-h-full ">
      {/* <Task /> */}
      {tasks && <Task task={tasks.data[0]} />}
      <div className="bg-black h-fit text-sm text-[var(--color-grey-300)] p-2 min-w-[17rem] max-h-full rounded-lg ">
        <div className="text-center p-3">
          <p> + Create Task</p>
        </div>
      </div>
    </div>
  );
};

export default BoardBody;
