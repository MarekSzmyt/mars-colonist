import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Day from "./Day";
import ForecastSol from "../components/ForecastSol";
import "../scss/components/_Forecast.scss";
import "../scss/utils/_headers.scss";

const Forecast = () => {
  const { state } = useContext(GlobalContext);
  
  const checked = state["sol_keys"];
  const week = state["validity_checks"].sols_checked;
  const [active, setActive] = useState(checked[0]);

  const addActiveClass = (e) => {
    const clicked = e.target.id;
    if (active === clicked) { 
      setActive("");
    } else {
      setActive(clicked);
    }
  }

  return (
    <div className="Forecast-container">
          <div className="Forecast-info">
            <ForecastSol sol={active && active} />
          </div>
          <div className="Forecast-week">
            {week.slice(0, 7).map(day => (
              <Day key={day} sol={day} current={active} handleClicked={addActiveClass} />
            ))}
          </div>
    </div>
  )
}

export default Forecast;
