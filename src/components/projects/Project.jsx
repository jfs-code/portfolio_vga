import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import MainImage from './MainImage';
import Details from './Details';
import Modal from './Modal';
import './css/Project.css';

const Project = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(project.images[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="proj-container">
      <div className="proj-right-container">
        <MainImage src={selectedImage} />
        <ImageCarousel images={project.images} onImageClick={handleImageClick} />
      </div>
      <div className="proj-left-container">
        <Details
          title={project.title}
          description={project.description}
          onButtonClick={handleButtonClick}
        />
      </div>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Project;