import { useState } from "react"
import data from "../country.json"

const Pane = () => {

    const [open, setOpen] = useState()
    const [visible, setVisible] = useState(true)

    return (
        <div>
            {data.map((item, key) => {
                return (
                    <div key={key} className="pane" onClick={()=> {
                        setOpen(item.key);
                        setVisible(false)
                    }} >
                        <div className="pane-item">{item.name}</div>
                        {visible && key === "null" ? (
                            <>
                                <div className="pane-item">{item.capital}</div>
                                <div className="pane-item">{item.continent}</div>
                            </>
                        ) : null}
                        {open === key ? (
                            <>
                                <div className="pane-item">{item.capital}</div>
                                <div className="pane-item">{item.continent}</div>
                            </>
                        ) : null }
                        

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