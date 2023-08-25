import { TaskTypes } from "../../types/task-types";
import AddTask from "../AddTask.tsk/AddTask";
import Task from "../Task/Task";
export interface BoardBodyProps {
  tasks: TaskTypes[] | undefined;
}
const BoardBody: React.FC<BoardBodyProps> = ({ tasks }) => {
  return (
    <div className="py-3 px-2 backdrop-blur-sm overflow-x-auto overflow-y-hidden grid grid-flow-col  auto-cols-max grid-rows-1 gap-4 min-h-full transition-all">
      {/* <Task /> */}
      {tasks && tasks.map((task, i) => <Task key={i} task={task} />)}
      <AddTask />
    </div>
  );
};

export default BoardBody;
