import React from 'react'

const Modal = ({show, onClose}) => {
    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="bg-modal">
                <div>
                    <h2>Modal Title</h2>
                </div>
                <div>
                    <p>This is modal</p>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/HolkerStreet.png/800px-HolkerStreet.png" alt="test" /> */}
                </div>
                <div>
                    <button onClick={onClose}>
                        close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
