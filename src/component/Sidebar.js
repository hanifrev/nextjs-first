import React, {useState} from 'react'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
    const [show, setShow] = useState(false)
    
    return (
        <div className='sidebar'>
            <ul className='sidelist'>
            {SidebarData.map((x, key) => {
                return (
                    <li 
                      key={key} 
                      onClick={() => window.location.pathname = x.link}
                      className='row'
                    >
                        <div id='icon'>{x.icon}</div>
                        <div id='title'>
                            {x.title}
                        </div>
                    </li>
                )
            })} 
            </ul>  
        </div>
    )
}

export default Sidebar
