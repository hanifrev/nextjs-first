import React, {useState} from 'react'
import Link from 'next/link'

const Mboh = () => {
    const [show, setShow] = useState(false)
    const [items, setItems] = useState([])
    const [itemName, setItemName] = useState("");

    const addData = (e) => {
       e.preventDefault()

       if (itemName === "") {
           return false
       }

       setItems([
           ...items,
           {
               id: items.length,
               name: itemName
           }
       ]);
       setItemName("")
    }

    const deleteData = (index) => {
        const data = [...items]
        data.splice(index, 1)
        setItems(data)
    }

    const styles = {
        border: '2px solid black',
        width: '5rem'
    }

    return (
        <div>
            <form onSubmit={addData}>
                <label>
                    <input 
                        name="item"
                        type="text"
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}
                    />
                    <button type="submit">ADD</button>
                </label>
            </form>
            <ul>
                {items.map((x) => (
                    <li key={x.id} style={{display: 'flex', flexDirection: 'row'}} >
                        <div style={styles}>
                            <Link href={`/notes/${x.name}`}>
                                {x.name}
                            </Link>
                        </div>
                        <button onClick={() => deleteData()}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Mboh
