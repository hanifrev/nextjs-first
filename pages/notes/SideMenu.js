import React, {useState} from 'react'
import Sidebar from '../../src/component/Sidebar'

const SideMenu = () => {
    const [show, setShow] = useState(false)

    const btnStyle = {
        active: {
            width: '200px',
            height: '10px',
            backgroundColor: 'rgb(47, 64, 80)'
        },
        inactive: {
            width: '23px',
            height: '100vh',
            backgroundColor: 'rgb(47, 64, 80)'
        }
    }
    return (
        <div className='sideapp'>
            <div style={show ? btnStyle.active : btnStyle.inactive}>
                <button onClick={() => setShow(!show)}>
                    {show ? "X" : "="}
                </button>
            </div>
            {show && <Sidebar />}
        </div>
    )
}

export default SideMenu
