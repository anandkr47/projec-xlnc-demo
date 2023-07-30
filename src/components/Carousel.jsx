import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalDuration = 3000; // Set the duration in milliseconds (3 seconds in this example)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]); // Auto-update will be triggered whenever the activeIndex changes

  return (
    <div className="relative w-full overflow-hidden">
      <div className="carousel flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={item.image} alt={item.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button className="prev-button absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-5 text-black text-opacity-75 hover:text-opacity-100 border-none outline-none rounded-full p-3 left-4" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next-button absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-5 text-black text-opacity-75 hover:text-opacity-100 border-none outline-none rounded-full p-3 right-4" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
