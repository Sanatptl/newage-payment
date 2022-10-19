import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="Bill" className="w-[100%] h-[100%] relative z-[5]" />

      <div
        className={`absolute white__gradient -left-1/2 top-0 z-[6] rounded-full w-[50%] h-[50%]`}
      ></div>
      <div
        className={`absolute pink__gradient -left-1/2 bottom-0 z-[0] rounded-full w-[50%] h-[50%]`}
      />
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`text-white ${styles.heading2}`}>
        Easily control your
        <br className={`sm:block hidden`} /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[475px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
        <img src={apple} className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`}></img>
        <img src={google} className={`w-[128px] h-[42px] object-contain cursor-pointer`}></img>
      </div>
    </div>
  </section>
);

export default Billing;
