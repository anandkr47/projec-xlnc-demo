import { features } from "../constants";
import React, { useState } from "react";
import styles,{ layout } from "../style";

import { carbonoutimg2 } from "../assets";
import Button from "./Button";
import "./floating.css";

const FeatureCard = ({ icon, title, content, index }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleCardClick = () => {
    setIsContentVisible((prevIsVisible) => !prevIsVisible);
  };
  const handleMouseEnter = () => {
    setIsContentVisible(true);
  };
  const handleMouseLeave = () => {
    setIsContentVisible(false);
  };

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className={`flex-1 flex flex-col ml-3 `}>
        <h4
          className={`font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 `}
        >
          {title}
        </h4>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] ${
            isContentVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => (
  <div>
  <h3 className={styles.heading2}>Features</h3>
  <section id="features" className={layout.section}>
    
    <div className={layout.sectionImgReverse}>
      <div className="relative">
        <img
          src={carbonoutimg2}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]  hover:rounded-3xl transition-all hover:scale-105 shadow-lg animate-float glowing-effect"
        />
        {/* Rest of the code */}
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col mt-[-60px] relative z-10`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  </div>
);

export default Business;
