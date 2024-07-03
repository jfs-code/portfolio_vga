import React from 'react';
import PropTypes from 'prop-types';
import './css/ImageCarousel.css';

const ImageCarousel = ({ images, onImageClick }) => {
    return (
        <div className="image-carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className="thumbnail"
                        onClick={() => onImageClick(image)}
                    />
                ))}
            </div>
        </div>
    );
};

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageCarousel;