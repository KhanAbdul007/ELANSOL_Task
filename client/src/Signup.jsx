import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { Input } from "@mui/material";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://elansol-backend-1c8t.onrender.com/api/register",
        formData
      );
      console.log("User registered successfully:", response.data);
      alert("Registration successful!");
      navigate("/signin");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div className="card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            label="Name"
            name="name"
            variant="filled"
            placeholder="Name"
            className="text-modify"
            value={formData.name}
            onChange={handleChange}
            />
          <br />
          <Input
            id="last-name"
            label="Last Name"
            name="lastName"
            variant="filled"
            placeholder="Last Name"
            className="text-modify"
            value={formData.lastName}
            onChange={handleChange}
            />
          <br />
          <Input
            id="email"
            label="Email"
            name="email"
            variant="filled"
            placeholder="Email"
            className="text-modify"
            type="email"
            value={formData.email}
            onChange={handleChange}
            />
          <br />
          <Input
            id="password"
            label="Password"
            variant="filled"
            placeholder="Password"
            className="text-modify"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            />
          <br />
          <Input
            id="confirm-password"
            label="Confirm Password"
            variant="filled"
            placeholder="Confirm Password"
            className="text-modify"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
        <br />
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>
    </>
  );
};

export default Signup;
