import { useState } from "react"
import data from "../country.json"

const Pane = () => {

    const [open, setOpen] = useState()
    const [visible, setVisible] = useState(true)

    const test = () => (console.log('qwerty'))
    const flag = () => (

        <div>
            {console.log(data.flag)}
        </div>
    )

    return (
        <div>
            {data.map((item, key, idx) => {
                return (
                    <div key={idx} className="pane" onClick={()=> {
                        setOpen(item.key);
                        setVisible(false)
                    }} >
                        <div className="pane-item">{item.name}</div>
                        <div className="pane-item">{item.capital}</div>
                        <div className="pane-item">{item.continent}</div>

                        <div className="imgpane">
                            {visible && key === "0" ? (
                                <img src={item.flag} key={item.key} className="flagimg" />
                            ) : null }
                            {open === key ? (
                                <>
                                    <img src={item.flag} key={item.key} className="flagimg" />
                                </>
                            ) : null }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Pane