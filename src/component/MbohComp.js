import React from 'react'

const MbohComp = ({data}) => {
    return (
        <div>
            {data.map((x, id) => {
                return (
                    <div key={id}>
                        <h1>{x.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default MbohComp
