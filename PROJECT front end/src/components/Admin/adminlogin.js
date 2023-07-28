import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import "./adminlogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux';
import { login } from "../../redux/userslice";
// import { login } from "./redux/userslice.js";


function Adminlogin() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('');
  const [cons,setCons]=useState(0);
  const dispatch=useDispatch();
    const navigate=useNavigate();
  
    function authenticateUser()
    {
        axios.post("http://localhost:8080/",{
            "email":email,
            "password":password
        }).then((response)=>
        {
            navigate("/admin/dashboard");
        }).catch((error)=>window.alert("Invalid details"))
    }
  function validate(e)
  {
    e.preventDefault();
    let cons=0;
    var error=[];
    if(email.length<5)
    {
        error.email="Please enter a valid username";
    }
    if(password.length<8)
    {
        error.password="    Wrong password";
    }
    if(email.length!=0)
    {
      cons=cons+1;
    }
    if(password.length!=0)
    {
      cons=cons+1;
    }
    setError(error);
    if(cons===2)
    {
      authenticateUser();
    }
    dispatch(login({email}));
  }

  return (
    <div className="content_box">
        <form onSubmit={validate}>
      <div className="outer">
        <div className="field">
          <h1 id="head">Admin Login</h1>
          <br /><br /><br /><br /><br /><br /><br />
          <input
            id="eml"
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br /><br />
          <input
            id="pwd"
            type="password"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br /><br />
          <button id="submit" onClick={validate}>LOGIN</button>
          <br /><br />
          <h4 id="lower"><Link to='/login'>Back to Login</Link></h4>
        </div>
      </div>
      </form>
    </div>
  );

  }
export default Adminlogin;
