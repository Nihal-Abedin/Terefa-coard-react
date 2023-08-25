import { ReactNode } from "react";
import BoardHeader from "./BoardHeader";
import BoardBody, { BoardBodyProps } from "./BoardBody";

interface BoardTemplate {
  Header: React.FC;
  Body: React.FC<BoardBodyProps>;
}
interface BoardProps {
  children?: ReactNode;
}
// bg-default
const Board: React.FC<BoardProps> & BoardTemplate = ({ children }) => {
  return (
    <div className="py-3 px-2 grid grid-cols-1 grid-rows-[3rem,1fr] bg-default backdrop-blur  bg-cover bg-no-repeat overflow-y-hidden">
      {children}
    </div>
  );
};

Board.Header = BoardHeader;
Board.Body = BoardBody;
export default Board;
