import React, { useState } from 'react'
import NewStateTodos from './NewStateTodos'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className=""
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button>add</button>
        </form>
    )
}

const NewState = ({}) => {
    const [todos, setTodos] = useState([
        { 
            text: "Warming Up",
            isCompleted: true
        },
        { 
            text: "Shoot Drill",
            isCompleted: true
        },
        { 
            text: "Mini Games",
            isCompleted: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, { text }]
        setTodos(newTodos)
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <NewStateTodos key={index} index={index} todo={todo} />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default NewState
