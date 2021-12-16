import React from 'react'

const NewStateTodos = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            
            <div>
                <button onClick={() => completeTodo(index)}>complete</button>
                <button onClick={() => removeTodo(index)} >X</button>
            </div>
        </div>
    )
}

export default NewStateTodos
