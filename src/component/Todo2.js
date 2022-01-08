import React, {useState} from 'react'
import NewStateTodos from './NewStateTodos'

const Todo2 = () => {
    const [show, setShow] = useState(false)
    const [todos, setTodos] = useState([
        {
            text: "mini games",
            isComplete: true
        },
        {
            text: "cooling down",
            isComplete: true
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }

    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isComplete = true
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }


    return (
        <div>
            
        </div>
    )
}

export default Todo2
