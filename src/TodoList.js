import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos}) => {
    return (
        <div>
            <ul>{todos.map(elem =>(
                <Todo key={elem.id} text={elem.text} todos={todos} todo={elem} setTodos={setTodos} />
            ))}</ul>
        </div>
    )
}

export default TodoList
