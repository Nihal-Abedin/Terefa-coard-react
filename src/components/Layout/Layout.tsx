import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto,1fr] h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
