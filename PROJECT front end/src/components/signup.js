import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./signup.css";
function Signup() {
  const [name, setName] = useState("");
  const [iemail, setIEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
const navigate=useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    if (!name || !iemail || !password || !mobile) {
      alert("Please fill in all fields.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(iemail)) {
      alert("Please enter a valid email address.");
      return;
    }


    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    try {
      console.log(name);
      console.log(iemail);
      console.log(password);
      console.log(mobile);

      const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name: name,
        email: iemail,
        password: password,
        // phnno: mobile
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="content_box">
      <div className="outer">
        <div className="fields">
          <h1 id="head">Register your Account</h1>
          <br />
          <br />
          <input
            id="usrnm"
            type="text"
            required
            placeholder="Enter your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            id="eml"
            type="email"
            required
            placeholder="Enter your email here"
            value={iemail}
            onChange={(e) => setIEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            id="pwd"
            type="password"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input
            id="mob"
            type="tel"
            required
            placeholder="Enter your mobile number here"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <br />
          <br />
          <br />
          <Link to='/login'><button type="submit" onClick={handleSignup}>Register</button></Link>
          <br />
          <br />
          
          <h4 id="lower"><Link to='/login'>Already have an account?Login</Link></h4>
        </div>
      </div>
    </div>
  );
}

export default Signup;
