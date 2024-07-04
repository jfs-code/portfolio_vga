import React from 'react';
import './css/Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <h2>Información Contacto</h2>
      <button className="card-button">Agenda tu cita</button>
      <div className="card-info">
        <img src="/imgs/email.svg" alt="Email" className="card-icon" />
        <p>v.gongoraandrade@gmail.com</p>
      </div>
      <div className="card-info">
        <img src="/imgs/phone.svg" alt="Phone" className="card-icon" />
        <p>+57 312 688 7362</p>
      </div>
    </div>
  );
}

export default Card;
