import React, { useState } from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import "../scss/components/_Header.scss";
import Clock from "./Clock";

const Header = () => {
  const [active, setActive] = useState("first");

  const addActiveClass = (e) => {
    const clicked = e.target.id;
    if (active === clicked) { 
      setActive("");
    } else {
      setActive(clicked);
    }
  }

  return (
    <header>
      <div className="Header-container">
        <nav className="Header-nav">
          <ul>
            <li><Link to="/" className={`Header-item ${active === "first"? "Header-active": ""}`} id="first" onClick={addActiveClass}>Summary</Link></li>
            <li><Link to="/tasks" className={`Header-item ${active === "second"? "Header-active": ""}`} id="second" onClick={addActiveClass}>Tasks</Link></li>
            <li><Link to="/forecast" className={`Header-item ${active === "third"? "Header-active": ""}`} id="third" onClick={addActiveClass}>Forecast</Link></li>
          </ul>
        </nav>
        <Link to="/"><img src={logo} className="Header-logo" alt="logo"/></Link>
        <Clock />
      </div>
    </header>
  )
}

export default Header;
