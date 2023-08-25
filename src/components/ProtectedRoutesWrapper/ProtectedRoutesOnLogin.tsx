import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutesOnLogin = () => {
  const location = useLocation();

  if (localStorage.getItem("TERAFE_TOKEN")) {
    return <Navigate to="/taskboard" state={{ from: location }} />;
  }

  return <Outlet />;
};
export default ProtectedRoutesOnLogin;
