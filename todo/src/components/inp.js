import React,{useState} from "react";
import './inp.css';
const Inp = ({tasks,handleClick}) => {
    const [name,setName] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        tasks.name = e.target.value;
        setName(e.target.value);
    }
    const handleClickhelper=(e)=>{
        handleClick(e);
        setName("");
    }
  return (
    <div className="inpmain">
      <input
        id="inpid"
        type="text"
        value={name}
        placeholder="Enter task name"
        onChange={handleChange}
        className="inp"
      />
      <button className="btn" onClick={handleClickhelper}>Add</button>
    </div>
  );
};

export default Inp;
