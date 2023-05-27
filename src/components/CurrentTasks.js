import React from "react";
import "../scss/utils/_headers.scss";
import "../scss/utils/_buttons.scss";
import "../scss/components/_CurrentTasks.scss"
import Task from "./Task";

const CurrentTasks = ({ tasks, changeStatus, deleteTask }) => {
  const isDone = (task) => {
    return (task.done === false)
  }

  return (
    <div className="CurrentTasks-container">
      <div className="header header--large">
        <h2>Current tasks</h2>
      </div>
      <ul>
        {tasks.filter(isDone).map(task => (
          <Task key={task.id} id={task.id} info={task.info} done={task.done} handleDone={changeStatus} handleRemove={deleteTask} />
        ))}
      </ul>
    </div>
  )
}

export default CurrentTasks;
