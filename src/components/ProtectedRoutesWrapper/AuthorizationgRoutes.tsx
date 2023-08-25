import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const AuthorizationgRoutes: React.FC<Props> = ({ children }) => {
  if (!localStorage.getItem("TERAFE_TOKEN")) {
    return <Navigate replace to={"/"} />;
  }
  return children;
};

export default AuthorizationgRoutes;
