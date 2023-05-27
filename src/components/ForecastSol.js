import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import wind from "../images/direction.svg";
import sun from "../images/icons/sun.svg";
import eva from "../images/icons/eva.svg";
import "../scss/components/_DashboardSol.scss";
import "../scss/utils/_headers.scss";

const DashboardSol = (sol) => {
  const { state } = useContext(GlobalContext);

  // console.log(state[sol.sol]);
  // if (state[sol.sol].AT === undefined) {
  //   console.log("test");
  // }

  //{parseInt(state[sol.sol].PRE.av)}

  return (
    <>
      <div className="header header--large">
        <h2>Sol {sol.sol}</h2>
      </div>
      <div className="DashboardSol-container">
        <div className="DashboardSol-col-1">
          <div className="DashboardSol-atmosphere">
            <h3>Atmosphere</h3>
            <span className="DashboardSol-title-large">{state[sol.sol] == null ? "N/A " : `${state[sol.sol].AT.av} °F`}</span>
            <span className="DashboardSol-title-medium icon-high">{state[sol.sol] == null ? "N/A " : `${state[sol.sol].AT.mx} °F`}</span>
            <span className="DashboardSol-title-medium icon-low">{state[sol.sol] == null ? "N/A " : `${state[sol.sol].AT.mn} °F`}</span>
            <span className="DashboardSol-title-medium icon-pre">{state[sol] == null ? "N/A " : `${state[sol].PRE.av} Pa`}</span>
          </div>
          <div className="DashboardSol-conditions">
            <h3>Conditions</h3>
            <div>
              <span className="DashboardSol-title-small">Solar power</span>
              <img src={sun} alt="solar power"/>
            </div>
            <div>
              <span className="DashboardSol-title-small">EVA</span>
              <img src={eva} alt="eva"/>
            </div>
          </div>
        </div>
        <div className="DashboardSol-col-1 DashboardSol-wind">
          <h3>Wind</h3>
          <div className="DashboardSol-wind-column">
            <div className="DashboardSol-wind-speed"> 
              <span className="DashboardSol-title-medium icon-wind">{state[sol.sol] == null ? "N/A " : `${state[sol.sol].HWS.av} m/s`}</span>
              <div>
                <span className="DashboardSol-title-small icon-high">{state[sol.sol] == null ? "N/A " : `${state[sol.sol].HWS.mx} m/s`}</span>
                <span className="DashboardSol-title-small icon-low">{state[sol.sol] == null ? "N/A" : `${state[sol.sol].HWS.mn} m/s`}</span>
              </div>
            </div>
            <div className="DashboardSol-wind-diagram">
              <img src={wind} alt="wind direciton"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSol;
