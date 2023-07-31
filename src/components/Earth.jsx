import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

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
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Save Our environment</p>
        <h3 className={styles.sectionHeadText}>Eco Friendly.</h3>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Earth, "earth");
