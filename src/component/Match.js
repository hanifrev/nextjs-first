import React from 'react'

const Match = ({match, style}) => (
    <div onClick={() => console.log(match.isWin)} style={style}>
        {match.text}
    </div>
)

// if win, bg-color must be green when it's clicked, red if it lost

export default Match