import React from 'react';
import { Navbar } from './../navbar/Navbar';
import { Carrusel } from './../carrusel/Carrusel';
import { About } from './../about/About';
import { Projects } from './../projects/Projects';
import { Contacts } from './../contacts/Contacts';
import { Footer } from './../footer/Footer';
import "./css/Page.css";

// const links = [
//   { text: "Inicio", href: "#home" },
//   { text: "Sobre mi", href: "#aboutme" },
//   { text: "Portafolio", href: "#projects" },
//   { text: "Contacto", href: "#contacts" }
// ];

export function Page() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { text: "Inicio", href: "#home", onClick: () => scrollToSection("home") },
    { text: "Sobre mi", href: "#aboutme", onClick: () => scrollToSection("aboutme") },
    { text: "Portafolio", href: "#projects", onClick: () => scrollToSection("projects") },
    { text: "Contacto", href: "#contacts", onClick: () => scrollToSection("contacts") }
  ];

  return (
    <div className="page">
      <div className="navbar">
        <Navbar brand="Menu" links={links} />
      </div>
      <div id="home" className="carousel">
        <Carrusel />
      </div>
      <div id="aboutme" className="aboutme">
        <About />
      </div>
      <div id="projects" className="projects">
        <Projects />
      </div>
      <div id="contacts" className="contacts">
        <Contacts />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
