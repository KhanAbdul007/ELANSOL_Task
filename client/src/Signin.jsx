import { useState } from "react";
import axios from "axios";
// import TextField from "@mui/material/TextField";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
       "https://elansol-backend-1c8t.onrender.com/api/signin",
       formData
     );
     console.log("Response data:", response.data);
     if (response.data.success) {
        
       alert("Successfully logged in!");
       window.location.href = "/users";
     } else {
       alert("Invalid credentials. Please try again.");
     }
   } catch (error) {
     console.error("Error logging in:", error);
     alert("Login failed. Please try again.");
   }
 };

 console.log(formData);
  return (
    <>
      <div className="card">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <br />
          <Input
            id="email"
            label="Email"
            name="email"
            variant="filled"
            className="text-modify"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <Input
            id="password"
            label="Password"
            variant="filled"
            className="text-modify"
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          
    
          <br />
          <br />
          <button type="submit">Sign In</button>
        </form><br/>
        Register <Link to="/">Sign Up</Link>
      
      </div>
    </>
  );
};

export default Signin;
