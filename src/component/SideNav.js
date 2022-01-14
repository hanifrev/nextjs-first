import React,  {useState} from 'react'
import Sidebar from './Sidebar'

const SideNav = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [counter, setCounter] = useState(0)

    const A = () => (
        <>
            <p>this is A</p>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </>
    )

    const B = () => (
        <p>this is B</p>
    )

    return (
        <div className="sidenav">
            {/* <Sidebar /> */}
            <div className='rownav'>
                <div>
                    <button onClick={() => setShow(!show)}>A</button>
                    
                </div>
                <div>
                    <button onClick={() => setShow2(!show2)}>B</button>
                    
                </div>
            </div>
            <div>
                {show && <A />}
                {show2 && <B />}
            </div>
        </div>
    )
}

export default SideNav
