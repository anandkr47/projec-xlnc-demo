import React from 'react';
import Carousel from './Carousel';
import { Galarycrousel,Galary } from '../constants';
const ImageGallery = () => {
  return (
    
    <div className="image-gallery">
        <div>
        <Carousel items={Galarycrousel} />
      </div>
      {Galary.map((Galary, index) => (
        <div className="card" key={index}>
          <img src={Galary.img} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
