import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="admin-panel-container">
        <div className="admin-panel-box">
          <h1 className="login-title">Admin Panel</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="form-label">Email Address</p>
              <input
                type="email"
                className="form-input"
                placeholder="enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <p className="form-label">Password</p>
              <input
                type="password"
                className="form-input"
                placeholder="******"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="form-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
