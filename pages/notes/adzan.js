import React, { useState, useEffect } from 'react'

const Adzan = () => {
    const [time, setTime] = useState([])
    
    useEffect(() => {
        Adzan()
    }, [])

    const Adzan = async () => {
        try {
            const API = 'https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/kediri/2022/01.json'

            const res = await fetch(API)
            const json = await res.json()
            // console.log(json)
            setTime(json)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>Shubuh</th>
                        <th>Dzuhur</th>
                        <th>Ashr</th>
                        <th>Magrib</th>
                        <th>Isya</th>
                    </tr>
                </thead>
                <tbody> 
                    {time.map((x, id) => {
                        return (
                            <tr key={id}>
                                <td style={{paddingRight:"1rem"}}>{x.tanggal}</td>
                                <td>{x.shubuh}</td>
                                <td>{x.dzuhur}</td>
                                <td>{x.ashr}</td>
                                <td>{x.magrib}</td>
                                <td>{x.isya}</td>
                            </tr>
                        )
                    } )}
                </tbody>
            </table>
        </div>
    )
}

export default Adzan
