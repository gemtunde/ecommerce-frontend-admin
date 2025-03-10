import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="app-container">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <div className="app-content">
            <Sidebar setToken={setToken} />
          </div>
          <div className="page-content">
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
