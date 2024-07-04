import React from 'react';
import './css/Contacts.css';
import Card from './Card';
import Form from './Form';

export function Contacts () {
  return (
    <div className="contact-main-container">
      <div className="contacts-container">
        <div className="contacts-card">          
          <Card />
        </div>
        <div className="contacts-form">
          <Form />
        </div>
      </div>
    </div>    
  );
}




