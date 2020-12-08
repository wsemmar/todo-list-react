import React from 'react'
import './style.css'

const Todo = ({text,todos,todo,setTodos}) => {
    const deletHandler =() =>{
        setTodos(todos.filter((el) => el.id !== todo.id
        ))
    }
    const checkHandler =() =>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id)
            return{
                ...item, completed: !item.completed,
            }
            return item
            
        }))
    }
    return (
        <div className="todo-container"> 
            <li className={`${todo.completed?"completed":""}`}>{text}</li>
            <button onClick={checkHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deletHandler}className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
