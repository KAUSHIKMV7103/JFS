import React, { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";

import "./adminnav.css";
import { Link, NavLink } from "react-router-dom";

export const Adminnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Admin Panel
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
         <li>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin/song">Songs</NavLink>
        </li>
        <li>
          <NavLink to="/admin/viewfeedback">Feedback</NavLink>
        </li>
    
        <div className="icon">
        <Link to="/admin/login">
          <RiAccountCircleFill size={35} />
        </Link>
        </div>

      </ul>
    </nav>
  );
};
