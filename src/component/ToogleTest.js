import React, { useState } from 'react'
// import Image from 'next/image'

const ToogleTest = () => {
    const [show, setShow] = useState(false)
    const Imgs = () => {
        return (
            <div>
                <img src="https://www.kabarpenumpang.com/wp-content/uploads/2017/06/lK61rWG.jpg" alt="test" />
            </div>
        )
    }

    return (
        <div>
            {show && <Imgs />}
            <button onClick={() => setShow(!show)}>OPEN</button>
        </div>
    )
}

export default ToogleTest
