import React from 'react';
import Carousel from './Carousel';
import styles from '../style';
import { galary } from '../assets';
import { Galarycrousel, Galary } from '../constants';
import Footer from './Footer'
import { Link } from 'react-router-dom';
const ImageGallery = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <a
          href="/"
          className="py-4 px-6 font-poppins font-medium text-18 text-primary bg-blue-gradient rounded-10 outline-none mb-4 sm:mb-0 sm:mr-4"
        >
          Home
        </a>
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl leading-10 text-center sm:text-left"
        style={{marginLeft:"10%"}}  
        >
          <span className="text-gradient">Our Gallery</span>
        </h1>
        <img
          src={galary}
          alt="star"
          className="w-12 h-12 sm:w-50 sm:h-50 object-contain rounded-full order-first sm:order-last mb-4 sm:mb-0 mx-auto sm:mr-0 "
        />
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
      <Footer/>
    </div>
  );
};

export default ImageGallery;
