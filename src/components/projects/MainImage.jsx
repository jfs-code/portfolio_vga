import React from 'react';
import './css/MainImage.css';

const MainImage = ({ src }) => {
    return (
        <div className="main-image">
            <img src={src} alt="Main" />
        </div>
    );
};

export default MainImage;

