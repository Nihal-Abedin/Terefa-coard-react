import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/SignUp/SignUp";
import Layout from "./components/Layout/Layout";
import ProtectedRoutesOnLogin from "./components/ProtectedRoutesWrapper/ProtectedRoutesOnLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoutesOnLogin />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        {/* <Route element={<Layout />}>
          <Route path="/tasks" element={<Layout />} />
        </Route> */}
        <Route path="/tasks" element={<Layout />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
