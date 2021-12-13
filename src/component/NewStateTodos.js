import React from 'react'

const NewStateTodos = ({ todo, index, completeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            
            <div>
                <button onClick={() => completeTodo(index)}>complete</button>
            </div>
        </div>
    )
}

export default NewStateTodos
