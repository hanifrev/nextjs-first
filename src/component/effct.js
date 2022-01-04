import React, { useEffect, useState } from "react";

const Effct = () => {
    const [text, setText] = useState("")
    const [friend, setFriend] = useState(null)

    useEffect(() => {
        if (text.length) localStorage.setItem("edit-text", text)
    })

    useEffect(() => {
        setText(localStorage.getItem("edit-text"))
    }, [])

    // 
    // 

    useEffect(() => {
        if (!friend) return
        console.log(`EFFECT: subscribe chat message dari ${friend}`)

        return () => {
            console.log(`CLEANUP: unsubscribe chat message dari ${friend}`)
        }
    }, [friend])

    friend && console.log(`RENDER: friend ${friend}`);

    return (
        <div>
            <textarea
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button onClick={e => setFriend("Azamuddin")}>Azamuddin</button>
            <button onClick={e => setFriend("Hafid")}>Hafid</button>
            <br /> <br />
            <div style={{color: '#FFF'}}>
                {friend ? `friend ${friend}` : "no opened friend"}
            </div>
        </div>
    )
}

export default Effct
