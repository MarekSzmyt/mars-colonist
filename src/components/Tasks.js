import React, { useState } from "react";
import "../scss/utils/_buttons.scss";
import "../scss/components/_Tasks.scss";
import CurrentTasks from "./CurrentTasks";
import FinishedTasks from "./FinishedTasks";

const Tasks = () => {
  const [list, setList] = useState([
    {
        id: 1,
        info: "check water and oxyen levels",
        done: false
    },
    {
        id: 2,
        info: "check solar panels capacity",
        done: false
    },
    {
        id: 3,
        info: "adjust current energy usage",
        done: true
    },
    {
        id: 4,
        info: "maintnace check",
        done: false
    },
    {
        id: 5,
        info: "workout",
        done: true
    },
  ])
  
  const [inputItem, setInputItem] = useState("");

  const handleChange = (e) => {
      setInputItem(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setList (prev => [{id: (prev.length + 1), info: inputItem, done: false}, ...prev]);
      setInputItem("")
  }

  const handleDone = id => {
      const index = list.findIndex(el => el.id == id);
      const copy = [...list];

      if (copy[index].done === false) {
        copy[index].done = true;
        setList(copy);
      } else {
        copy[index].done = false;
        setList(copy);
      }
  }

  const handleRemove = id => {
    setList(prev => prev.filter((task) => task.id != id));
  }

  return (
    <div className="Tasks-container">
      <form className="Tasks-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="New task" value={inputItem} onChange={handleChange}/>
          <button type="submit" className="btn">Add</button>
      </form>
      <div className="Tasks-list">
        <CurrentTasks tasks={list} changeStatus={handleDone} deleteTask={handleRemove} />
        <FinishedTasks tasks={list} changeStatus={handleDone} deleteTask={handleRemove} />
      </div>
    </div>
  )
}

export default Tasks;
