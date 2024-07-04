import React from 'react';
import Project from './Project';
import './css/Projects.css';

const projects = [
  {
    images: [
      '/imgs/svg.svg',
      '/imgs/svg_1.svg',
      '/imgs/svg_2.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
    ],
    title: 'Product Title 1',
    description: 'This is a description of the product 1.',
  },
  {
    images: [
      '/imgs/svg.svg',
      '/imgs/svg_1.svg',
      '/imgs/svg_2.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
    ],
    title: 'Product Title 2',
    description: 'This is a description of the product 2.',
  },
  {
    images: [
      '/imgs/svg.svg',
      '/imgs/svg_1.svg',
      '/imgs/svg_2.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
    ],
    title: 'Product Title 3',
    description: 'This is a description of the product 3.',
  },
  {
    images: [
      '/imgs/svg.svg',
      '/imgs/svg_1.svg',
      '/imgs/svg_2.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
      '/imgs/svg_3.svg',
      '/imgs/svg_4.svg',
      '/imgs/svg_5.svg',
    ],
    title: 'Product Title 4',
    description: 'This is a description of the product 4.',
  },
  // Agrega más proyectos según sea necesario
];

export function Projects () {
  return (
    <div className="Projects-container">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}
