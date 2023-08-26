import { ReactNode, createContext } from "react";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
import { TaskTypes } from "../../types/task-types";

interface BoardTemplate {
  Header: React.FC;
  Body: React.FC;
}
interface BoardProps {
  children?: ReactNode;
  tasks: TaskTypes[] | undefined;
}
interface InitialPropTypes {
  task: TaskTypes[] | undefined;
}
export const BoardTemplateContext = createContext<InitialPropTypes>({
  task: [],
});
// bg-default
const Board: React.FC<BoardProps> & BoardTemplate = ({ children, tasks }) => {
  // const [task] = useState<TaskTypes[]>(tasks);
  return (
    <BoardTemplateContext.Provider value={{ task: tasks }}>
      <div className="py-3 px-2 grid grid-cols-1 grid-rows-[3rem,1fr] bg-default backdrop-blur  bg-cover bg-no-repeat overflow-y-hidden">
        {children}
      </div>
    </BoardTemplateContext.Provider>
  );
};

Board.Header = BoardHeader;
Board.Body = BoardBody;
export default Board;
