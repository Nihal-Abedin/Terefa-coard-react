import React, { ReactNode } from "react";
import WorkspaceNav from "./WorkspaceNav";
import WorkspacePreview from "./WorkspacePreview";

interface WorspaceTempProps {
  children: ReactNode;
}
interface WorkspaceTempCom {
  Nav: React.FC;
  Preview: React.FC;
}
const WorkspaceTemp: React.FC<WorspaceTempProps> & WorkspaceTempCom = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-[1fr,2.5fr] grid-rows-1 gap-2 h-full overflow-hidden">
      {children}
    </div>
  );
};
WorkspaceTemp.Nav = WorkspaceNav;
WorkspaceTemp.Preview = WorkspacePreview;

export default WorkspaceTemp;
