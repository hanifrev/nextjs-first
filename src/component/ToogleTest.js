import React, { useState } from 'react'

const ToogleTest = () => {
    const [show, setShow] = useState(false)
    const Imgs = () => {
        return (
            <div>
                <img src="https://www.kabarpenumpang.com/wp-content/uploads/2017/06/lK61rWG.jpg" alt="test" />
                <ul>
                    <li>test 1</li>
                    <li>test 2</li>
                    <li>test 3</li>
                    <li>test 4</li>
                    <li>test 5</li>
                </ul>
            </div>
        )
    }

    const styles = {
        "backgroundColor": "red",
        "color": "white"
    }

    const styles2 = {
        "backgroundColor": "green",
        "color": "white"
    }

    return (
        <div>
            <button
                style={show ? styles : styles2}  
                onClick={() => setShow(!show)}
            >
                {show ? "Close" : "Open"}
            </button>
            {show && <Imgs />}
        </div>
    )
}

export default ToogleTest
