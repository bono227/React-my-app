import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      alert("Form submitted successfully");
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div id="container">
      <form id="form-container">
        <h1>Sign Up</h1>
        <input
          className="inputClass"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="email"
          placeholder="eMail"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="btn" type="sibmit" onClick={handleSubmit}>
          Sign Up
        </button>
        <Link
          to="/signin"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          Have an account?
        </Link>
      </form>
    </div>
  );
};

// AI Assistant
// const handleChange = (e) => {
//   setFromData({...fromData, [e.target.name]: e.target.value });
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(fromData);
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(formData);
// }
