import React, { useState } from "react";
import './todo.css';
const Todo = ({task,tasks,updateTask}) => {
const[state,setState] = useState("undone");
  const handleDone = () => {
    task.taskStatus = !task.taskStatus;
    console.log(task);
    if(task.taskStatus){
        setState("done");
    }else{
        setState("undone");
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    updateTask(tasks.filter(f => f.id !== task.id));
    console.log("delete");
  };

  return (
    <div className="todo">
        <p className={state}>{task.name}</p>
        <div className="btndiv">
        <button className="btndone" onClick={handleDone}>Done</button>
        <button className="btndel" onClick={handleDelete}>Delete</button>
        </div>
    </div>
  );
};

export default Todo;
