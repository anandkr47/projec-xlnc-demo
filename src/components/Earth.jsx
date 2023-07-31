import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { earth,moon,eco } from "../assets";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "./floating.css"

const Earth = () => {
  

  const [loading, setLoading] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
  };

  return (
    <section id='contact'
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >


      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        
    <EarthCanvas />
        
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Save Our environment with our</p>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">

        <h3 className={styles.sectionHeadText}>Eco Friendly Pavers.</h3>
          <img src={moon} alt="star" className="w-[100px] h-[100px] object-contain rounded-full animate-spinning" 
    style={{ marginRight: "32%" }}/>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Earth, "earth");
