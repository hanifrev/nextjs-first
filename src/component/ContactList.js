import React, {useState} from 'react'

const ContactList = ({data}) => {
    return (
        <div style={{
            paddingTop: '1rem'
        }}>
            {data.map((x, id) => {
                return (
                    <div key={id} style={{
                        paddingBottom: '1rem'
                    }}>
                        <div>
                            <div>{x.name}</div>
                            <div>{x.email}</div>
                        </div>
                        <div>
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ContactList
