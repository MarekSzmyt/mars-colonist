import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Link } from "react-router-dom";
import lv1 from "../images/base-1.svg";
import lv2 from "../images/base-2.svg";
import lv3 from "../images/base-3.svg";
import lv4 from "../images/base-4.svg";
import "../scss/components/_Dashboard.scss";
import "../scss/utils/_headers.scss";
import DashboardSol from "../components/DahsboardSol";

const Dashboard = () => {
  const { state } = useContext(GlobalContext);

  const checked = state["sol_keys"];
  const [active, setActive] = useState("first");
  const [map, setMap] = useState(lv1);

  const addActiveClass = (e) => {
    const clicked = e.target.id;
    if (active === clicked) { 
      setActive("");
    } else {
      setActive(clicked);
    }

    switch (active) {
      case "first":
        setMap(lv1);
        break;
      case "second":
        setMap(lv2);
        break;
      case "third":
        setMap(lv3);
        break;
      case "fourth":
        setMap(lv4);
        break;
    }
  }

  return (
    <div className="Dashboard-container">
          <div className="Dashboard-box Dashboard-sol">
            <DashboardSol sol={checked && checked[0]}/>
          </div>
          <div className="Dashboard-box Dashboard-task">
            <div className="header header--large">
              <h2>Current task</h2>
            </div>
              <ul>
                <li>
                  <label>
                  <input className="checkbox" type="checkbox" />
                  <span>check water and oxyen levels</span>
                  </label>
                </li>
              </ul>
          </div>
          <div className="Dashboard-box Dashboard-layout">
            <div className="header header--large">
              <h2>Habitat 11a</h2>
            </div>
            <div className="Dashboard-layout-map">
              <img src={map} alt="map layout"/>
            </div>
            <div className="Dashboard-layout-nav">
              <ul>
                <li><Link to="/" className={`Dashboard-layout-item ${active === "first"? "Dashboard-layout-active": ""}`} id="first" onClick={addActiveClass}>lv 1</Link></li>
                <li><Link to="/" className={`Dashboard-layout-item ${active === "second"? "Dashboard-layout-active": ""}`} id="second" onClick={addActiveClass}>lv 2</Link></li>
                <li><Link to="/" className={`Dashboard-layout-item ${active === "third"? "Dashboard-layout-active": ""}`} id="third" onClick={addActiveClass}>lv 3</Link></li>
                <li><Link to="/" className={`Dashboard-layout-item ${active === "fourth"? "Dashboard-layout-active": ""}`} id="fourth" onClick={addActiveClass}>lv 4</Link></li>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Dashboard;
