import React, { useEffect, useState } from "react";
import { stats } from "../constants";
import styles from "../style";

const useStatCounter = (initialValue, animationDuration) => {
  const [count, setCount] = useState(0);
  const totalSteps = Math.ceil(animationDuration / (1000 / 60)); // 60 FPS
  const stepSize = Math.ceil(initialValue / totalSteps);

  useEffect(() => {
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += stepSize;
      setCount((prevCount) => Math.min(prevCount + stepSize, initialValue));
      if (currentCount >= initialValue) clearInterval(interval);
    }, animationDuration / totalSteps);

    return () => {
      clearInterval(interval);
    };
  }, [initialValue, animationDuration]);

  return count;
};

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {useStatCounter(stat.value, 2000)}+{/* 2000ms animation duration */}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
