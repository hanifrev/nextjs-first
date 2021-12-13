import React from 'react'
import { useState, useEffect } from 'react'
import imgdata from './images.json'

const ImageState = () => {
    const theData = imgdata

    // console.log(theData[0].img)
    const [data, setData] = useState(0)

    const styles = {
        // backgroundColor: '#FFFFFF',
        width: '10rem',
        height: '2rem',
        margin: '1rem 0rem', 
    }

    return (
        <div>
            <div>
                {theData.map((item, index) => {
                    return (
                        <button 
                            style={styles} 
                            key={index} 
                            onClick={() => setData(index)}  
                            className="njajal"                 
                        >
                            {item.text}
                        </button>
                    )
                })}
            </div>

            {/* images */}
            <div>
                <img
                    src={theData[data].img}
                    alt="test"
                    style={{width:'20rem'}}
                />
                
            </div>
        </div>
    )
}

export default ImageState
