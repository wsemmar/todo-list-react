import React from "react";
import './style.css'
const AddTodo = ({ setInput,input,setTodos,todos}) => {
  const inputHandler = (e) => {
    setInput(e.target.value)
  };
  const submithandler = (e) => {
    e.preventDefault();
    setTodos([...todos,
      {text: input, completed: false, id: Math.random()*1000}])
    setInput("")
  }
  return (
    <div>  
      <input  
        onChange={inputHandler} value={input}
        className="myinput" type="text" placeholder="Enter your task"
      />
      <button onClick={submithandler}   type="submit"><i className="fas fa-plus"></i></button>
    </div>
  );
};

export default AddTodo;