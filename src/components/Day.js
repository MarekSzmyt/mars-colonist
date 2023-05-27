import React from "react";
import "../scss/components/_Day.scss";

const Day = ({ sol, current, handleClicked }) => {
  return (
    <div className={`Day-item ${current === sol? "Day-active": ""}`} id={sol} onClick={handleClicked}>
      <h2>Sol {sol}</h2>
      <span>-88 °F</span>
    </div>
  )
}

export default Day;
