import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars } from  "react-icons/fa"
import { FaMixer } from  "react-icons/fa"


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);



  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <div
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        <i className={ expandNavbar ? "fas fa-times" : "fas fa-bars" }></i>
        </div>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
