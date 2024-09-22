import React, { useState } from "react";
import "./Signin.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";

export const Signin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log(userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.email && userData.password) {
      alert("Form submitted successfully");
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <div id="container">
      <form id="form-container">
        <h1>Sign In</h1>
        <input
          className="inputClass"
          type="text"
          placeholder="eMail"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          Sign In
        </button>
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          Don't have an account?
        </Link>
      </form>
    </div>
  );
};
