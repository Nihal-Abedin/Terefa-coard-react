import { ReactNode } from "react";

interface BoardTemplate {
  Header: React.FC;
  Body: React.FC;
}
interface BoardProps {
  children?: ReactNode;
}
const Board: React.FC<BoardProps> & BoardTemplate = ({ children }) => {
  return (
    <div className="py-3 px-2 grid grid-cols-1 grid-rows-[auto,1fr]">
      {children}
    </div>
  );
};
const Header = () => {
  return <h1>Header</h1>;
};
const Body = () => {
  return (
    <div className="py-3 px-2 overflow-x-auto bg-yellow-200">
      <span>Body</span>
    </div>
  );
};
Board.Header = Header;
Board.Body = Body;
export default Board;
