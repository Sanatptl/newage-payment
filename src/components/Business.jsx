import { features } from "../constants";
import styles, { layout } from "../style";
import Buttons from "./Buttons";

const FeatureCard = ({ icon, title, content, ind }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      ind == features.length - 1 ? "mb-0" : "mb-6"
    } feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`} />
    </div>

    <div className={`flex flex-1 flex-col ml-3`}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className={`max-w-[470px] ${styles.paragraph} mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Buttons />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, ind) => {
          return <FeatureCard key={feature.id} {...feature} ind={ind} />;
        })}
      </div>
    </section>
  );
};

export default Business;
