import React, {useState} from 'react'
import { uid } from 'uid'
import ContactList from '../../src/component/ContactList'

const Crud = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([
        {
            "id": "1",
            "name": "Rooney Adam",
            "email": "adroo@gmail.com"
        },
        {
            "id": "2",
            "name": "Nick Peter",
            "email": "np@gmail.com"
        }
    ])

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    function handlerChange(e) {
        const theData = {...formData}
        theData[e.target.name] = e.target.value
        setFormData(theData)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const theData = [...data]
        theData.push({ id: uid(), name: formData.name, email: formData.email })
        setData(theData)
        setFormData({name: "", email: ""})
    }

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "close" : "add contact" }
            </button>
            { show &&
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text"     
                            name="name" 
                            value={formData.name}
                            onChange={handlerChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handlerChange}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
            }

            
            <ContactList data={data} />
        </div>
    )
}

export default Crud
