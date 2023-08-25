import { UserOutlined, FilterOutlined } from "@ant-design/icons";

const BoardHeader = () => {
  return (
    <div className="bg-[var(--color-grey-500-op-1)] drop-shadow-md p-2 rounded-md grid grid-cols-[3fr,1fr] grid-rows-1 items-center text-white">
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
export default BoardHeader;
