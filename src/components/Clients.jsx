import React, { useState, useEffect } from "react";
import { clients,support } from "../constants";
import styles from "../style";

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
            <img src={item.logo} alt={item.id} className="w-70 h-auto" />
          </div>
        ))}
      </div>
      
    </div>
  );
};

const Clients = () => {
  // Define your clients' data. For example:

  return (
    <section className={` ${styles.flexCenter}my-4 `}>
      <div className="crousel1"
      style={{marginLeft:"100px"}}
      >
      <h3 className="font-poppins font-bold text-[10px] leading-[17px] text-white">Recognised by</h3>
      <div
        className={`${styles.flexCenter} w-full relative`}
        style={{ width:"95%",marginRight: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", backgroundColor:"ActiveCaption", borderRadius: "20px",border: "1px solid #33DFF0",}}
      >
        
        {/* Use the Carousel component here */}
        <Carousel items={clients} />
      </div>
      </div>
      <div className="crousel2"
      style={{marginLeft:"5px"}}
      >
      <h3 className="font-poppins font-bold text-[10px] leading-[17px] text-white">Supported by</h3>
      <div
        className={`${styles.flexCenter} w-full relative`}
        style={{ width: "33%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",backgroundColor:"ActiveCaption", borderRadius: "20px",border: "1px solid #33DFF0",}}
      >

        {/* Use the Carousel component here */}
        <Carousel items={support} />
      </div>
      </div>
    </section>
  );
};

export default Clients;
