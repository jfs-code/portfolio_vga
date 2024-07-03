import React from 'react';
import './css/Modal.css';

const Modal = ({ isVisible, onClose, title, description }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h1>{title}</h1>
                <p>{description}</p>
                <button onClick={onClose}>Aceptar</button>
            </div>
        </div>
    );
};

export default Modal;
