import { ReactNode, createContext, useState } from "react";
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
  setSelectedCardId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCardId: string | null;
}
export const BoardTemplateContext = createContext<InitialPropTypes>({
  task: [],
  setSelectedCardId: () => null,
  selectedCardId: null,
});
// bg-default
const Board: React.FC<BoardProps> & BoardTemplate = ({ children, tasks }) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  return (
    <BoardTemplateContext.Provider
      value={{ task: tasks, setSelectedCardId, selectedCardId }}
    >
      <div className="py-3 px-2 grid grid-cols-1 grid-rows-[3rem,1fr] bg-default backdrop-blur  bg-cover bg-no-repeat overflow-y-hidden">
        {children}
      </div>
    </BoardTemplateContext.Provider>
  );
};

Board.Header = BoardHeader;
Board.Body = BoardBody;
export default Board;
