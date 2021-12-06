import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EffectEx = () => {
    const [data, setData] = useState("")
    const [name, setName] = useState("")
    const [counter, setCounter] = useState(0)

    const ctn = () => {
        setCounter(counter + 1)
    }
    const ctnmin = () => {
        setCounter(counter - 1)
    }

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[counter].email)
            })
    }, [counter])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setName(response.data[counter].name)
            })
    }, [counter])

    return (
        <div>
            Your Email is {data}<br />
            Your name is {name}
            <div>
                <button onClick={ctnmin}>-</button>
                <button onClick={ctn}>+</button>
                {counter}
            </div>
        </div>
    )
}

export default EffectEx
