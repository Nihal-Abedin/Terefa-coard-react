import { useTasks } from "../../query/queries/tasks";
import Board from "../BoardTemplate/BoardTemplate";

const TaskBoard = () => {
  const { data, isLoading, error, isError } = useTasks();

  console.log(data, isLoading, error, isError);

  return (
    <Board>
      <Board.Header />
      <Board.Body tasks={data} />
    </Board>
  );
};

export default TaskBoard;
