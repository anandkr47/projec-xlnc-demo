import { apple, bill, google,carbonoutimg1,carbonoutimg3,product } from "../assets";
import styles ,{ layout } from "../style";
import Button from "./Button";
import "./floating.css";

const Billing = () => (
  <div>
    <div className={` ${styles.flexCenter}`}>
  <h3 className={styles.heading2}
  style={{marginLeft:"35%"}}
  
  >Our Product</h3>
    <img src={product} alt="star" className="w-[50px] h-[50px] object-contain rounded-full" 
    style={{ marginRight: "35%" }}/>
  </div>
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <img
  src={carbonoutimg3}
  alt="billing"
  className="w-[100%] h-[100%] relative z-[5] rounded-full hover:rounded-3xl transition-all hover:scale-105 shadow-lg animate-spinning"
/>


      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        PAVER 360 <br className="sm:block hidden" /> The Glowing
        Tile Block
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
      </div>
    </div>
  </section>
  </div>
);

export default Billing;
