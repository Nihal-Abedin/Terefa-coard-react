import { ReactNode, createContext, useState } from "react";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
import { Cards, TaskTypes } from "../../types/task-types";

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
  setSelectedCard: React.Dispatch<React.SetStateAction<Cards | null>>;
  selectedCard: Cards | null;
}
export const BoardTemplateContext = createContext<InitialPropTypes>({
  task: [],
  setSelectedCard: () => null,
  selectedCard: null,
});
// bg-default
const Board: React.FC<BoardProps> & BoardTemplate = ({ children, tasks }) => {
  const [selectedCard, setSelectedCard] = useState<Cards | null>(null);
  return (
    <BoardTemplateContext.Provider
      value={{ task: tasks, setSelectedCard, selectedCard }}
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
