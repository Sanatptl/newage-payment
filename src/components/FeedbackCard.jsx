import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className="flex justify-between flex-col max-w-[370px] px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 my-5 mr-0 feedback-card">
        <img src={quotes} alt="double-quote" className="w-[42px] h-[27px] object-contain" />
        <p className={`my-10 font-poppins font-normal text-[18px] leading-[32px] text-white`}>{content}</p>
        <div className="flex flex-row">
            <img src={img} alt="profile-img" className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
                <h4 className="font-semibold font-poppins text-[20px] leading-[32px] text-white">{name}</h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard;