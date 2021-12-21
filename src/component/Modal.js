import React from 'react'

const Modal = props => {
    if (!props.show) {
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
                </div>
                <div>
                    <button onClick={props.onClose}>
                        cta
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
