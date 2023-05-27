import React from "react"
import "../scss/components/_Task.scss";
import remove from "../images/icons/close.svg";

const Task = ({ id, info, done, handleDone, handleRemove }) => {
  return (
    <li className={`Task-item ${done ? "Task-checked" : ""}`}>
      <label onClick={() => handleDone(id)}>
      <input className="checkbox" type="checkbox" checked={done ? "checked" : ""}/>
      <span>{info}</span>
      </label>
      <img src={remove} alt="remove task" onClick={() => handleRemove(id)} />
    </li>
  )
}

export default Task;
