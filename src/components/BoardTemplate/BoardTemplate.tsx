import { ReactNode } from "react";
import { UserOutlined, FilterOutlined, EditOutlined } from "@ant-design/icons";

interface BoardTemplate {
  Header: React.FC;
  Body: React.FC;
}
interface BoardProps {
  children?: ReactNode;
}
const Board: React.FC<BoardProps> & BoardTemplate = ({ children }) => {
  return (
    <div className="py-3 px-2 grid grid-cols-1 grid-rows-[3rem,1fr] bg-default bg-cover bg-no-repeat overflow-y-hidden">
      {children}
    </div>
  );
};
const Header = () => {
  return (
    <div className="bg-[var(--color-grey-500-op-1)] p-2 rounded-md grid grid-cols-[3fr,1fr] grid-rows-1 items-center text-white">
      <h3>Header</h3>
      <div className="justify-self-end flex items-center gap-2">
        <div className="flex items-center gap-2">
          <FilterOutlined />
          <p>Filter</p>
        </div>
        <div className="px-3 border-solid border-t-0 border-r-0 border-b-0 border-l border-l-[var(--color-grey-300)]">
          <div className="w-2 h-2 rounded-full bg-black flex justify-center items-center p-4">
            <UserOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="py-3 px-2 overflow-x-auto overflow-y-hidden grid grid-flow-col  auto-cols-max grid-rows-1 gap-4 min-h-full ">
      <div className="bg-black h-fit text-sm text-[var(--color-grey-300)] p-2 min-w-[17rem] max-h-full rounded-lg grid grid-cols-1 grid-rows-[1fr,auto,1fr]">
        <div className="flex justify-between items-center mb-3 p-3">
          <p className="font-medium ">TODO</p>
          <EditOutlined />
        </div>
        {/**card */}
        <div className="grid grid-cols-1 p-2 grid-flow-row auto-rows-max gap-3 text-sm mb-3  min-h-fit overflow-y-auto ">
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg mr-1">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg">
            <p>asd</p>
          </div>
        </div>
        {/**card */}
        <div className="text-center p-3">
          <p> + Add Card</p>
        </div>
      </div>
      <div className="bg-black h-fit text-sm text-[var(--color-grey-300)] p-2 min-w-[17rem] max-h-full rounded-lg grid grid-cols-1 grid-rows-[1fr,auto,1fr]">
        <div className="flex justify-between items-center mb-3 p-3">
          <p className="font-medium ">TODO</p>
          <EditOutlined />
        </div>
        {/**card */}
        <div className="grid grid-cols-1 p-2 grid-flow-row auto-rows-max gap-3 text-sm mb-3  min-h-fit overflow-y-auto ">
          <div className="bg-[--color-grey-500-op-2] p-2 rounded-lg mr-1">
            <p>asd</p>
          </div>
        </div>
        {/**card */}
        <div className="text-center p-3">
          <p> + Add Card</p>
        </div>
      </div>
    </div>
  );
};
Board.Header = Header;
Board.Body = Body;
export default Board;
