import React from "react";
import { NavLink } from "react-router-dom";
import { FaCentos } from "react-icons/fa";
import { IoIosLogOut, IoMdAddCircleOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ setToken }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <FaCentos className="sidebar-logo" />
        <h2>GemWave</h2>
      </div>
      <div className="sidebar-links">
        <NavLink className="sidebar-link" to="/add">
          <IoMdAddCircleOutline className="sidebar-icon" />
          <p className="sidebar-text">Add Product</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/list">
          <MdFormatListBulletedAdd className="sidebar-icon" />
          <p className="sidebar-text">List Product</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/orders">
          <MdAddShoppingCart className="sidebar-icon" />
          <p className="sidebar-text">Orders</p>
        </NavLink>
        <button onClick={() => setToken("")} className="sidebar-link">
          <IoIosLogOut className="sidebar-icon" />
          <p className="sidebar-text">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
