import { cardimg,carbonoutimg4 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import "./floating.css";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Innovative Paver-360 <br className="sm:block hidden" /> Floor
        Illumination.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={carbonoutimg4} alt="billing" className="w-[100%] h-[100%] animate-float" />
    </div>
  </section>
);

export default CardDeal;
