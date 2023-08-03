import React from 'react';
import Carousel from './Carousel';
import styles from '../style';
import { galary } from '../assets';
import { Galarycrousel, Galary } from '../constants';
import { Link } from 'react-router-dom';
const ImageGallery = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-10">
        <Link to="/" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Home
    </Link>
          <span className="text-gradient" style={{ marginLeft: "35%" }}>
            Our Gallery
          </span>
        </h1>
        <img src={galary} alt="star" className="w-[50px] h-[50px] object-contain rounded-full" 
    style={{ marginRight: "35%" }}/>
      </div>
      <div className={`bg-primary ${styles.boxWidth}`}>
        <div className="image-gallery mt-10">
          
            <Carousel items={Galarycrousel} />
          
          <div className="grid grid-cols-2 gap-4 mt-10"> {/* Create a grid with two columns */}
            {Galary.map((image, index) => (
              <div className="card" key={index}>
                <img
                  src={image.img}
                  alt={`Image ${index}`}
                  className="w-full h-auto object-cover rounded"
                />
                <div className="card-content p-2"> {/* Add a card content div */}
                  <h2 className="font-semibold text-lg mt-2">{image.title}</h2> {/* Display image title */}
                  <p className="text-sm mt-1">{image.disciption}</p> {/* Display image description */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
