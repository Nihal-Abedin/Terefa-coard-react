import WorkspaceTemp from "../components/WorkspaceTemplate/WorkspaceTemp";

const Workspace = () => {
  return (
    <div className="bg-default-1 text-white flex justify-center items-center">
      <div className="backdrop-blur-md bg-white/30 border-2 border-sky-500 w-[70%] h-[90vh] rounded-lg p-3 ">
        <WorkspaceTemp>
          <WorkspaceTemp.Nav />
          <WorkspaceTemp.Preview />
        </WorkspaceTemp>
      </div>
    </div>
  );
};

export default Workspace;
