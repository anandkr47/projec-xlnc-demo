import styles from "../style";

import GetStarted from "./GetStarted";
import Carousel from "./Carousel";
import {crousel2, crousel3,carbonoutimg1 } from "../assets";
const items = [
  {
    image: carbonoutimg1,
    alt: "Carousel Image 1",
  },
  {
    image: crousel2,
    alt: "Carousel Image 2",
  },
  {
    image: crousel3,
    alt: "Carousel Image 3",
  },
  // Add more carousel items as needed
];

const Hero = () => {
  
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Product Of New Age
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The Smart IOT Tile Block For Modern Architecture and Sustainable Infrastructure
        </p>
      </div>

      <div>
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default Hero;
