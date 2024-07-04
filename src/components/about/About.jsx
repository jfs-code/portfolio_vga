import React, { useState } from 'react';
import './css/About.css';

export function About() {
  // Ejemplo de datos dinámicos para los roles
  const [roles, setRoles] = useState([
    {
      icon: '/imgs/linkedin.png',
      roleType: 'Desarrollador Frontend',
      companyName: 'Compañía XYZ',
    },
    {
      icon: '/imgs/linkedin.png',
      roleType: 'Ingeniero de Software',
      companyName: 'Compañía ABC',
    },
  ]);

  // Ejemplo de datos dinámicos para las redes sociales
  const [socialLinks, setSocialLinks] = useState([
    {
      icon: '/imgs/instagram.png',
      url: 'https://www.instagram.com',
      alt: 'Instagram'
    },
    {
      icon: '/imgs/tik-tok.png',
      url: 'https://www.tiktok.com',
      alt: 'TikTok'
    },
    {
      icon: '/imgs/linkedin.png',
      url: 'https://www.linkedin.com',
      alt: 'LinkedIn'
    },
  ]);

  return (
    <div className="about-main-container">
      <div className="about-container">
        <div className="about-left-container">
          <img src="/imgs/linkedin.png" alt="Foto de perfil" className="profile-picture" />
          <h2 className="name">Valeria Góngora Andrade</h2>
          <p className="email">v.gongoraandrade@gmail.com</p>
          <a href="/JaimeFlorezSaldaña_es.pdf" download className="cv-button">Descarga mi CV</a>
        </div>
        <div className="about-right-container">
          <div className="right-top">
            <h3 className="about-me">SOBRE MÍ</h3>
            <h4 className="title-3">Abierto a trabajar</h4>
            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laboriosam laudantium dolorum perferendis minus, culpa doloribus? Ab, laudantium doloremque. Facilis unde dolor tempora perferendis voluptatibus laborum provident illo quas quibusdam.</p>
          </div>
          <div className="right-bottom">
            <h4 className="title-3">Últimos roles</h4>
            {roles.map((role, index) => (
              <div className="role" key={index}>
                <img src={role.icon} alt="Icono de trabajo" className="role-icon" />
                <div className="role-info">
                  <p className="role-type">{role.roleType}</p>
                  <p className="company-name">{role.companyName}</p>
                </div>
              </div>
            ))}
            <h4 className="title-3">Redes Sociales</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a href={link.url} target="_blank" rel="noopener noreferrer" key={index}>
                  <img src={link.icon} alt={link.alt} className="social-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

