import { useTasks } from "../../query/queries/tasks";
import Board from "../BoardTemplate/BoardTemplate";

const TaskBoard = () => {
  const { data, isLoading, error, isError } = useTasks();

  console.log(data, isLoading, error, isError);

  return (
    <Board tasks={data?.data}>
      <Board.Header />
      <Board.Body />
    </Board>
  );
};

export default TaskBoard;
